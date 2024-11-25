import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

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


export default nextConfig;
