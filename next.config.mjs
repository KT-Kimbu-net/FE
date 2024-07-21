/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  images: {
    domains: ["wizzap.ktwiz.co.kr", "statiz.sporki.com"],
  },
};

export default nextConfig;
