/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.heygen.com",
      },
      {
        protocol: "https",
        hostname: "resource.heygencdn.com",
      },
    ],
  },
};

export default nextConfig;
