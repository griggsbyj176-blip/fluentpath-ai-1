/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export required for Capacitor/Android packaging.
  // NOTE: This disables server-side API routes (/api/*).
  // For production, deploy the Next.js app separately and point
  // NEXT_PUBLIC_API_BASE_URL to that deployment in your .env.local.
  output: 'export',
  images: {
    // Required for static export — Next.js Image Optimization is server-side only.
    unoptimized: true,
  },
};

module.exports = nextConfig;
