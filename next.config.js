/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
        ],
    },
    compress: true,
    async rewrites() {
        return []
    },
}

export default nextConfig
