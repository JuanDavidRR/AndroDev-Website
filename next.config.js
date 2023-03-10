/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  mode: 'production',
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  images: {
    domains: ['i.imgur.com']
  }
};

module.exports = nextConfig;