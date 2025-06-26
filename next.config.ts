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
    compress: true,
    poweredByHeader: false,
};

module.exports = withNextIntl(nextConfig);
