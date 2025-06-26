const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    basePath: '/containers/clementverdoire-portfolio-v2',
    assetPrefix: '/containers/clementverdoire-portfolio-v2/', // utile pour charger les images, fonts, etc.
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
