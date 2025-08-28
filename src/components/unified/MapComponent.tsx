// components/unified/MapComponent.tsx (محدث)
'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Place } from '@/app/[locale]/places/page'; // نستورد النوع

export interface MapComponentProps {
  coordinates: [number, number];
  zoom: number;
  places: Place[]; // نستخدم النوع المحدد
}

export default function MapComponent({ coordinates, zoom, places }: MapComponentProps) {
  return (
    <MapContainer 
      center={coordinates} 
      zoom={zoom} 
      className="h-full w-full"
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {places.map(place => (
        <Marker key={place.id} position={place.coordinates}>
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold">{place.name}</h3>
              <p className="text-sm text-gray-600">{place.type}</p>
              <p className="text-sm">{place.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}