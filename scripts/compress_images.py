"""
compress_images.py
Compresses all large JPEG/PNG photos in public/assets/ using Pillow.

- Resizes so longest edge <= 1600px (preserves aspect ratio)
- JPEG quality 78 (good visual quality, ~60-80% file size reduction)
- Backs up originals to public/assets/_originals/ first
- Skips logos, placeholder, and already-small files (< 300 KB)

Run: python scripts/compress_images.py
"""

import os
import shutil
from pathlib import Path
from PIL import Image

ASSETS = Path(__file__).parent.parent / "public" / "assets"
BACKUP = ASSETS / "_originals"

MAX_EDGE = 1600
JPEG_QUALITY = 78
SKIP_UNDER_BYTES = 300 * 1024  # 300 KB — already web-ready

# Files to skip — logos (may need transparency), placeholder, hero images
SKIP_NAMES = {
    "ATA-logo.png", "Black-Canvas-logo.png", "CEA-logo.png", "JKOA-logo.png",
    "KVK-logo.jpeg", "apiit-logo.png", "eclub-logo.png", "hi-tech-logo.png",
    "life-vision-logo.jpeg", "sab-logo.png", "sampath-logo.jpeg",
    "sasnaka-logo.png", "sandbox-logo.png", "unilever-logo.png",
    "veerakesari-logo.png", "placeholder-image.png",
}

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp"}

def compress(src: Path, backup: Path):
    """Resize + re-encode one image file in-place."""
    if not backup.exists():
        shutil.copy2(src, backup)

    img = Image.open(src)

    # Convert RGBA/P to RGB for JPEG (can't save transparency as JPEG)
    if src.suffix.lower() in (".jpg", ".jpeg") and img.mode in ("RGBA", "P", "LA"):
        img = img.convert("RGB")

    w, h = img.size
    if w > MAX_EDGE or h > MAX_EDGE:
        ratio = MAX_EDGE / max(w, h)
        img = img.resize((int(w * ratio), int(h * ratio)), Image.LANCZOS)

    if src.suffix.lower() in (".jpg", ".jpeg"):
        img.save(src, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
    elif src.suffix.lower() == ".png":
        img.save(src, "PNG", optimize=True)
    elif src.suffix.lower() == ".webp":
        img.save(src, "WEBP", quality=JPEG_QUALITY, method=6)

def main():
    BACKUP.mkdir(exist_ok=True)

    targets = [
        f for f in ASSETS.iterdir()
        if f.is_file()
        and f.suffix.lower() in IMAGE_EXTS
        and f.name not in SKIP_NAMES
        and not f.name.startswith("_")
    ]
    targets.sort(key=lambda f: f.name)

    print(f"\n🗜  {len(targets)} images to process (target: ≤{MAX_EDGE}px, JPEG q{JPEG_QUALITY})\n")

    total_saved = 0
    processed = 0
    skipped = 0

    for f in targets:
        before = f.stat().st_size
        if before < SKIP_UNDER_BYTES:
            print(f"  ⏭  {f.name:<60} {before/1024:.0f} KB — already small, skipped")
            skipped += 1
            continue

        backup_path = BACKUP / f.name
        try:
            compress(f, backup_path)
            after = f.stat().st_size
            pct = round((1 - after / before) * 100)
            total_saved += before - after
            processed += 1
            print(f"  ✓  {f.name:<60} {before/1024/1024:.1f} MB → {after/1024:.0f} KB  (-{pct}%)")
        except Exception as e:
            print(f"  ✗  {f.name}: {e}")

    print(f"\n{'─'*70}")
    print(f"✅  Done!")
    print(f"   Processed : {processed} files")
    print(f"   Skipped   : {skipped} files (already ≤300 KB)")
    print(f"   Total saved: {total_saved / 1024 / 1024:.1f} MB")
    print(f"   Originals backed up → public/assets/_originals/\n")

if __name__ == "__main__":
    main()
