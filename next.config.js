/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable modern format auto-conversion (WebP/AVIF) via Next.js Image component
    formats: ['image/avif', 'image/webp'],
    // Optimised device size breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow slightly lower quality for faster loads (default is 75)
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  // Enable compression
  compress: true,
};

module.exports = nextConfig;
