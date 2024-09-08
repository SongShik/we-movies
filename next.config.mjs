/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'wefit-react-web-test.s3.amazonaws.com',
            },
        ],
    },

}

export default nextConfig;
