/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/html/presentation.html',
            },
        ]
    }
}

module.exports = nextConfig
