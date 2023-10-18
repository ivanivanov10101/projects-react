/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    formats: ['image/webp'],
  },
}
module.exports = {
  reactStrictMode: true,
}
