/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    compress: true,
    async rewrites() {
        return []
    },
}

export default nextConfig
