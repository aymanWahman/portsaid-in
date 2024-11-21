"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import Image from "next/image";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

interface MapComponentProps {
  coordinates: [number, number];
  name: string;
  image?: string;
  address?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ coordinates, name, image, address }) => {
  const [lat, lng] = coordinates;

  return (
    <div className="mt-14 h-[500px] w-full">
      <MapContainer center={[lat, lng]} zoom={15} className="w-[100%] h-[100%]">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]}>
          <Popup>
            <h3 className="font-bold text-center text-seaBlue p-2">{name || "موقع غير مُسمى"}</h3>
            {image && (
              <Image
                className="rounded-xl shadow-2xl shadow-black w-[220px] h-[150px] hover:scale-105 transition-transform duration-300 mx-auto"
                src={image}
                alt={name || "صورة الموقع"}
                width={280}
                height={140}
                loading="lazy"
                priority={false}
              />
            )}
            <p className="text-center text-gray-500">{address}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
