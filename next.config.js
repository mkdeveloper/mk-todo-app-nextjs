/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  async rewrites(){
    return [
      {
        source: "/api/:path*",
        destination: "https://thisisjustfortodoapp.vercel.app/api/:path*",
      }
    ]
  }
}

module.exports = nextConfig
