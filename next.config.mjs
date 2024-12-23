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
  reactStrictMode: true,
  experimental: {
  
    // إذا كنت تستخدم ميزات أخرى تجريبية، يمكنك إضافتها هنا
  },

  serverExternalPackages: ['useSearchParams'], // تحديث الإعداد الجديد
};

export default nextConfig;
