const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    basePath: '/containers/portfolio-v2',
    assetPrefix: '/containers/portfolio-v2',
    experimental: {
        outputFileTracingIncludes: {
            '/': ['./messages/**/*'],
        },
    },
    images: {
        unoptimized: true,
    },
    // Optimize for production
    compress: true,
    poweredByHeader: false,
    trailingSlash: true,
};

module.exports = withNextIntl(nextConfig);