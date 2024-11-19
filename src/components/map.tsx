"use client";

import { useRouter } from "next/router";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface MapPageProps {
  coordinates: [number, number];
  name: string;
}

const MapPage: React.FC<MapPageProps> = ({ coordinates, name }) => {
  return (
    <div className="h-screen w-screen">
      <MapContainer center={coordinates} zoom={15} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={coordinates}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default function Page() {
  const router = useRouter();
  const { query } = router;
  const coordinates = query.coordinates
    ? (JSON.parse(query.coordinates as string) as [number, number])
    : [31.265, 32.3018];
  const name = query.name ? (query.name as string) : "موقع المطعم";

  return <MapPage coordinates={coordinates} name={name} />;
}
