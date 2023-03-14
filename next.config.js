/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 60 * 5, // some swapi endpoints can be slow
}

module.exports = nextConfig
