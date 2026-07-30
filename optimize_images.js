const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function processDirectory(directory) {
  const files = await readdir(directory);
  let totalSaved = 0;

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const fileStat = await stat(fullPath);

    if (fileStat.isDirectory()) {
      totalSaved += await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        totalSaved += await processImage(fullPath);
      }
    }
  }
  return totalSaved;
}

async function processImage(filePath) {
  const tempPath = filePath + '.tmp';
  let saved = 0;
  
  try {
    const originalStat = await stat(filePath);
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Scale down if width is greater than 1920 (standard HD width)
    if (metadata.width > 1920) {
      image.resize(1920, null, { withoutEnlargement: true });
    }

    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg') {
      await image.jpeg({ quality: 80, progressive: true, mozjpeg: true }).toFile(tempPath);
    } else if (ext === '.png') {
      await image.png({ quality: 80, compressionLevel: 8 }).toFile(tempPath);
    } else if (ext === '.webp') {
      await image.webp({ quality: 80 }).toFile(tempPath);
    }

    if (fs.existsSync(tempPath)) {
      const newStat = await stat(tempPath);
      
      // Only replace if it's actually smaller
      if (newStat.size < originalStat.size) {
        fs.renameSync(tempPath, filePath);
        const diff = originalStat.size - newStat.size;
        console.log(`Optimized: ${path.basename(filePath)} (-${(diff / 1024 / 1024).toFixed(2)} MB)`);
        saved = diff;
      } else {
        fs.unlinkSync(tempPath);
      }
    }
  } catch (error) {
    console.error(`Error processing ${path.basename(filePath)}:`, error.message);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
  return saved;
}

async function run() {
  console.log('Starting image optimization...');
  const assetsDir = path.join(__dirname, 'public', 'assets');
  const saved = await processDirectory(assetsDir);
  console.log(`\nFinished! Total space saved: ${(saved / 1024 / 1024).toFixed(2)} MB`);
}

run();
