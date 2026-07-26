/**
 * compress-images-jimp.mjs
 * Compresses all large JPEG photos in public/assets/ using jimp (pure JS, no native bindings).
 * - Resizes so longest edge ≤ 1600px
 * - JPEG quality 78
 * - Skips logos, placeholder, and team/person photos (webp headshots are already small)
 * - Backs up originals to public/assets/_originals/ before overwriting
 *
 * Run: node scripts/compress-images-jimp.mjs
 */

import Jimp from 'jimp';
import { readdir, mkdir, copyFile, stat } from 'fs/promises';
import { join, extname } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(__dirname, '..', 'public', 'assets');
const BACKUP = join(ASSETS, '_originals');

// Files to SKIP — logos (small / need transparency), placeholder, hero images handled by next/image
const SKIP_NAMES = new Set([
  'ATA-logo.png', 'Black-Canvas-logo.png', 'CEA-logo.png', 'JKOA-logo.png',
  'KVK-logo.jpeg', 'apiit-logo.png', 'eclub-logo.png', 'hi-tech-logo.png',
  'life-vision-logo.jpeg', 'sab-logo.png', 'sampath-logo.jpeg',
  'sasnaka-logo.png', 'sandbox-logo.png', 'unilever-logo.png',
  'veerakesari-logo.png', 'placeholder-image.png',
]);

// Skip small files — anything under 300 KB is already fine
const SKIP_UNDER_BYTES = 300 * 1024;

// Target longest edge
const MAX_EDGE = 1600;
const JPEG_QUALITY = 78;

async function run() {
  if (!existsSync(BACKUP)) await mkdir(BACKUP, { recursive: true });

  const allFiles = await readdir(ASSETS);

  // Only JPEG/JPG files (the big ones)
  const targets = allFiles.filter(f => {
    const ext = extname(f).toLowerCase();
    return (ext === '.jpg' || ext === '.jpeg') && !SKIP_NAMES.has(f) && !f.startsWith('_');
  });

  console.log(`\n🗜  Found ${targets.length} JPEG photos to process...\n`);

  let totalSaved = 0;
  let skipped = 0;
  let processed = 0;

  for (const name of targets) {
    const filePath = join(ASSETS, name);
    const backupPath = join(BACKUP, name);
    const before = (await stat(filePath)).size;

    // Skip already-small files
    if (before < SKIP_UNDER_BYTES) {
      console.log(`  ⏭  ${name.padEnd(60)} ${(before/1024).toFixed(0)}KB — already small, skipped`);
      skipped++;
      continue;
    }

    // Back up original (skip if already backed up)
    if (!existsSync(backupPath)) {
      await copyFile(filePath, backupPath);
    }

    try {
      const img = await Jimp.read(filePath);
      const { width, height } = img.bitmap;

      // Only resize if needed
      if (width > MAX_EDGE || height > MAX_EDGE) {
        img.scaleToFit(MAX_EDGE, MAX_EDGE);
      }

      img.quality(JPEG_QUALITY);
      await img.writeAsync(filePath);

      const after = (await stat(filePath)).size;
      const savedKB = ((before - after) / 1024).toFixed(0);
      const pct = Math.round((1 - after / before) * 100);
      totalSaved += (before - after);
      processed++;

      console.log(`  ✓ ${name.padEnd(60)} ${(before/1024/1024).toFixed(1)}MB → ${(after/1024).toFixed(0)}KB  (-${pct}%)`);
    } catch (err) {
      console.error(`  ✗ ${name}: ${err.message}`);
    }
  }

  console.log(`\n──────────────────────────────────────────────────────────────`);
  console.log(`✅  Done!`);
  console.log(`   Processed : ${processed} files`);
  console.log(`   Skipped   : ${skipped} files (already small)`);
  console.log(`   Total saved: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Originals backed up → public/assets/_originals/\n`);
}

run().catch(console.error);
