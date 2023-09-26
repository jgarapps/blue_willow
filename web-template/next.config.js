/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:  process.env.NODE_ENV !== "production" ? undefined: "export",
  // images: {
  //   unoptimized: envImageUnoptimize,
  // },
}

module.exports = nextConfig
