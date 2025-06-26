const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
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
    // Asset prefix for static files if needed
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/containers/clementverdoire-portfolio' : '',
};

module.exports = withNextIntl(nextConfig);