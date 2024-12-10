'use client';

import { useState } from 'react';

interface Panorama360Props {
  imageUrl: string;
  title: string;
}

export default function Panorama360({ imageUrl, title }: Panorama360Props) {
  return (
    <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
      <span className="text-gray-500 dark:text-gray-400">لا توجد صورة بانورامية لعرضها.</span>
    </div>
  );
};
