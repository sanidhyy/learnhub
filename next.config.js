/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
