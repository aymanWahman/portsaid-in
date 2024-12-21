'use client';

import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// تعريف نوع البيانات للأماكن
interface Place {
  id: number;
  name: string;
  category: string;
  latitude: number;
  longitude: number;
  description: string;
  image: string;
}

interface NearbyPlace {
  // Add properties for NearbyPlace as needed
}

interface InteractiveMapProps {
  places: Place[];
  nearbyPlaces: NearbyPlace[];
}

export default function InteractiveMap({ places, nearbyPlaces }: InteractiveMapProps) {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 32.3019,  // خط الطول لبورسعيد
          latitude: 31.2656,   // خط العرض لبورسعيد
          zoom: 12
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {places.map((place) => (
          <Marker
            key={place.id}
            longitude={place.longitude}
            latitude={place.latitude}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedPlace(place);
            }}
          >
            <div className="cursor-pointer">
              <div className="w-6 h-6 bg-seaBlue rounded-full flex items-center justify-center text-white transform transition-transform hover:scale-110">
                <span className="text-xs">📍</span>
              </div>
            </div>
          </Marker>
        ))}

        {selectedPlace && (
          <Popup
            longitude={selectedPlace.longitude}
            latitude={selectedPlace.latitude}
            anchor="bottom"
            onClose={() => setSelectedPlace(null)}
            className="max-w-[300px]"
          >
            <div className="p-2 text-right">
              <h3 className="font-bold text-lg mb-1">{selectedPlace.name}</h3>
              <p className="text-sm text-gray-600">{selectedPlace.description}</p>
              {selectedPlace.image && (
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  className="w-full h-32 object-cover rounded-lg mt-2"
                />
              )}
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
