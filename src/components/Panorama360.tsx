'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const Pannellum = dynamic(() => import('pannellum-react').then(mod => mod.Pannellum), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl flex items-center justify-center">
      <span className="text-gray-500 dark:text-gray-400">جاري تحميل المشهد البانورامي...</span>
    </div>
  ),
});

interface Panorama360Props {
  imageUrl: string;
  title: string;
}

export default function Panorama360({ imageUrl, title }: Panorama360Props) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
      <Pannellum
        width="100%"
        height="400px"
        image={imageUrl}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => setIsLoading(false)}
        title={title}
        compass={true}
        draggable
        keyboardZoom
        mouseZoom
        preview=""
        previewTitle={title}
        showControls
        showFullscreenCtrl
        showZoomCtrl
        hotspotDebug={false}
        className="rounded-xl"
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">جاري تحميل المشهد البانورامي...</span>
        </div>
      )}
    </div>
  );
}
