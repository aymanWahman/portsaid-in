'use client';

import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw'
}) => {
  // تحويل اسم الصورة إلى URL كامل من Cloudinary
  const url = buildUrl(src, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
    },
    transformations: {
      quality: 'auto',
      format: 'auto',
    },
  });

  return (
    <div className={`image-container ${className}`}>
      <Image
        src={url}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        priority={priority}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
};

export default CloudinaryImage;
