// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// }

// module.exports = nextConfig;


const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['tailwindcss'] = path.resolve(__dirname, 'node_modules/tailwindcss');
    return config;
  },
  experimental: {
    appDir: true, // إذا كنت تستخدم App Router
  },
};

