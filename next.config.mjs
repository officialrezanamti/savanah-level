/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  // Inlines these into client bundles without the NEXT_PUBLIC_ prefix Vercel rejects.
  env: {
    NEXT_SITE_URL: process.env.NEXT_SITE_URL,
    NEXT_BUSINESS_PHONE: process.env.NEXT_BUSINESS_PHONE,
    NEXT_BUSINESS_EMAIL: process.env.NEXT_BUSINESS_EMAIL,
    NEXT_BUSINESS_ADDRESS: process.env.NEXT_BUSINESS_ADDRESS,
    NEXT_GOOGLE_REVIEWS_URL: process.env.NEXT_GOOGLE_REVIEWS_URL,
    NEXT_SANITY_API_VERSION: process.env.NEXT_SANITY_API_VERSION,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
