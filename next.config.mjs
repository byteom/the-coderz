import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    webpack: (config, { isServer }) => {
        // Use asset/source instead of raw-loader for md files
        config.module.rules.push({
            test: /\.md$/,
            type: 'asset/source'
        });

        return config;
    }
};

// Ensure the dev platform setup is only done in development
if (process.env.NODE_ENV === 'development') {
    (async () => {
        await setupDevPlatform();
    })();
}

export default nextConfig;
