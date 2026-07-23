/**
 * compress-images.mjs
 * One-off script — compresses every large JPEG/PNG in public/assets/
 * that is used as a photo (skips logos, placeholder, hero images that
 * are already optimised by next/image at runtime).
 *
 * Run:  node scripts/compress-images.mjs
 *
 * Uses `sharp` installed as a devDependency just for this script.
 * Output: overwrites files in-place; originals are backed up to
 *         public/assets/_originals/ (created automatically).
 */

import sharp from 'sharp';
import { readdir, mkdir, copyFile, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const ASSETS = new URL('../public/assets', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const BACKUP = join(ASSETS, '_originals');

// Files to SKIP (logos, placeholder — already small or need transparency kept)
const SKIP = new Set([
  'ATA-logo.png', 'Black-Canvas-logo.png', 'CEA-logo.png', 'JKOA-logo.png',
  'KVK-logo.jpeg', 'apiit-logo.png', 'eclub-logo.png', 'hi-tech-logo.png',
  'life-vision-logo.jpeg', 'sab-logo.png', 'sampath-logo.jpeg',
  'sasnaka-logo.png', 'sandbox-logo.png', 'unilever-logo.png',
  'veerakesari-logo.png', 'placeholder-image.png',
]);

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

// Target: resize so longest edge ≤ 1600px, JPEG quality 78, PNG effort 9
const MAX_EDGE = 1600;
const JPEG_QUALITY = 78;
const WEBP_QUALITY = 80;
const PNG_COMPRESSION = 9;

async function compress(filePath, name) {
  const ext = extname(name).toLowerCase();
  const img = sharp(filePath);
  const meta = await img.metadata();
  const { width, height } = meta;

  // Determine output dimensions
  let newW = width, newH = height;
  if (width > MAX_EDGE || height > MAX_EDGE) {
    if (width >= height) { newW = MAX_EDGE; newH = Math.round(height * MAX_EDGE / width); }
    else                  { newH = MAX_EDGE; newW = Math.round(width  * MAX_EDGE / height); }
  }

  const resized = img.resize(newW, newH, { withoutEnlargement: true });

  if (ext === '.jpg' || ext === '.jpeg') {
    await resized.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(filePath + '.tmp');
  } else if (ext === '.png') {
    await resized.png({ compressionLevel: PNG_COMPRESSION }).toFile(filePath + '.tmp');
  } else if (ext === '.webp') {
    await resized.webp({ quality: WEBP_QUALITY }).toFile(filePath + '.tmp');
  }

  // Swap tmp → original (sharp can't overwrite in-place)
  const { rename } = await import('fs/promises');
  await rename(filePath + '.tmp', filePath);
}

async function run() {
  if (!existsSync(BACKUP)) await mkdir(BACKUP, { recursive: true });

  const files = await readdir(ASSETS);
  const targets = files.filter(f => IMAGE_EXTS.has(extname(f).toLowerCase()) && !SKIP.has(f) && !f.startsWith('_'));

  console.log(`\n🗜  Compressing ${targets.length} images (target: ≤${MAX_EDGE}px longest edge, JPEG q${JPEG_QUALITY})\n`);

  let saved = 0;
  for (const name of targets) {
    const filePath = join(ASSETS, name);
    const backupPath = join(BACKUP, name);

    const before = (await stat(filePath)).size;

    // Back up original (skip if already backed up)
    if (!existsSync(backupPath)) await copyFile(filePath, backupPath);

    try {
      await compress(filePath, name);
      const after = (await stat(filePath)).size;
      const pct = Math.round((1 - after / before) * 100);
      saved += (before - after);
      console.log(`  ✓ ${name.padEnd(55)} ${(before/1024).toFixed(0).padStart(6)}KB → ${(after/1024).toFixed(0).padStart(5)}KB  (-${pct}%)`);
    } catch (err) {
      console.error(`  ✗ ${name}: ${err.message}`);
    }
  }

  console.log(`\n✅ Done. Total saved: ${(saved / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Originals backed up to: public/assets/_originals/\n`);
}

run().catch(console.error);
