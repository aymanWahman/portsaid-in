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
  swcMinify: true,  // يستخدم SWC لتقليل حجم الحزم
};

module.exports = nextConfig;
