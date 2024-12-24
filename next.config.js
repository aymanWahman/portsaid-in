/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // يسمح بتحميل الصور من جميع المسارات تحت هذا النطاق
      },
    ],
  },
  
};

module.exports = nextConfig;
