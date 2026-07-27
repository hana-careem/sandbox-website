/**
 * compress-large-images.mjs
 * Handles the very large Workshop sandbox 1.0 images that exceed Jimp's default memory limit.
 * Processes each file individually with increased Jimp memory allowance.
 *
 * Run: node --max-old-space-size=2048 scripts/compress-large-images.mjs
 */

import Jimp from 'jimp';
import { stat, copyFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(__dirname, '..', 'public', 'assets');
const BACKUP = join(ASSETS, '_originals');

const MAX_EDGE = 1600;
const JPEG_QUALITY = 78;

// These are the files that failed with Jimp's default memory limit
const LARGE_FILES = [
  'Workshop sandbox 1.0 (7).jpg',
  'Workshop sandbox 1.0 (8).jpg',
  'Workshop sandbox 1.0 (10).jpg',
  'Workshop sandbox 1.0 (13).jpg',
  'Workshop sandbox 1.0 (17).jpg',
  'Workshop sandbox 1.0 (19).jpg',
  'Workshop sandbox 1.0 (20).jpg',
  'Workshop sandbox 1.0 (21).jpg',
  'Workshop sandbox 1.0 (22).jpg',
  'Workshop sandbox 1.0 (24).jpg',
];

async function run() {
  if (!existsSync(BACKUP)) await mkdir(BACKUP, { recursive: true });

  console.log(`\n🗜  Processing ${LARGE_FILES.length} large images one at a time...\n`);

  let totalSaved = 0;
  let processed = 0;

  for (const name of LARGE_FILES) {
    const filePath = join(ASSETS, name);
    const backupPath = join(BACKUP, name);

    if (!existsSync(filePath)) {
      console.log(`  ⏭  ${name} — file not found, skipping`);
      continue;
    }

    const before = (await stat(filePath)).size;

    // Back up original
    if (!existsSync(backupPath)) {
      await copyFile(filePath, backupPath);
    }

    try {
      // Read with very high memory limit
      const img = await Jimp.read({ url: filePath, maxMemoryUsageInMB: 1024 });
      const { width, height } = img.bitmap;

      console.log(`  📐 ${name} — original: ${width}x${height} (${(before/1024/1024).toFixed(1)}MB)`);

      if (width > MAX_EDGE || height > MAX_EDGE) {
        img.scaleToFit(MAX_EDGE, MAX_EDGE);
      }

      img.quality(JPEG_QUALITY);
      await img.writeAsync(filePath);

      const after = (await stat(filePath)).size;
      const pct = Math.round((1 - after / before) * 100);
      totalSaved += (before - after);
      processed++;

      console.log(`  ✓  → compressed: ${(after/1024).toFixed(0)}KB  (-${pct}%)\n`);

      // Force GC between files
      if (global.gc) global.gc();
    } catch (err) {
      console.error(`  ✗ ${name}: ${err.message}\n`);
    }
  }

  console.log(`\n──────────────────────────────────────────────────────────────`);
  console.log(`✅  Done! Processed ${processed}/${LARGE_FILES.length} files`);
  console.log(`   Total saved: ${(totalSaved / 1024 / 1024).toFixed(1)} MB\n`);
}

run().catch(console.error);
