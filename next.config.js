/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/presentation.html',
            },
        ]
    }
}

module.exports = nextConfig
