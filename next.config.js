/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/person-finder",
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/**",
      },
    ],
  },

  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
