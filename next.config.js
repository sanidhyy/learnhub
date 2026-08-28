/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      // uploadthing
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
};

module.exports = nextConfig;
