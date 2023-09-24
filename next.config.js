/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daisycon.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
