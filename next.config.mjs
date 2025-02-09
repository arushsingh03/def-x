/** @type {import('next').NextConfig} */

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "assets.aceternity.com" }],
  },
};

export default nextConfig;
