'use client';

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import NearbyPlacesFilter from './NearbyPlacesFilter';
import NearbyPlaceDetails from './NearbyPlaceDetails';

interface NearbyPlace {
  name: string;
  coordinates: [number, number];
  type: string;
  image?: string;
  rating?: number;
  phone?: string;
  address?: string;
  openingHours?: string;
  description?: string;
}

interface MapProps {
  coordinates: [number, number];
  name?: string;
  address?: string;
  image?: string;
  markerIcon?: string;
  nearbyPlaces?: NearbyPlace[];
}

const MapComponent: React.FC<MapProps> = ({ 
  coordinates, 
  name, 
  address, 
  image, 
  markerIcon,
  nearbyPlaces = []
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['restaurant', 'hotel', 'attraction']);
  const [selectedPlace, setSelectedPlace] = useState<NearbyPlace | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  useEffect(() => {
    // Update markers visibility based on selected types
    Object.entries(markersRef.current).forEach(([type, marker]) => {
      if (selectedTypes.includes(type)) {
        marker.addTo(mapRef.current!);
      } else {
        marker.remove();
      }
    });
  }, [selectedTypes]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // إعداد الخريطة
    const map = L.map(mapContainerRef.current).setView(coordinates, 13);
    mapRef.current = map;

    // إضافة طبقات مختلفة للخريطة
    const layers = {
      'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }),
      'خريطة الشوارع': L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team'
      }),
      'صورة فضائية': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      })
    };

    // إضافة الطبقة الافتراضية
    layers['OpenStreetMap'].addTo(map);

    // إضافة زر تبديل الطبقات
    L.control.layers(layers).addTo(map);

    // إضافة أيقونة مخصصة للـ Marker
    const customIcon = L.icon({
      iconUrl: markerIcon || 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -30]
    });

    // إضافة Marker الرئيسي مع Popup
    const mainMarker = L.marker(coordinates, { icon: customIcon }).addTo(map);
    const popupContent = `
      <div style="text-align: center; direction: rtl;">
        <h3 style="margin: 3px; color: #2563eb; font-weight: bold;">${name || 'مكان غير مسمى'}</h3>
        ${image ? `<img src="${image}" alt="${name}" style="width: 150px; height: auto; margin: auto;" />` : ''}
        <p>${address || ''}</p>
      </div>
    `;
    mainMarker.bindPopup(popupContent).openPopup();

    // إضافة الأماكن القريبة
    nearbyPlaces.forEach(place => {
      const icon = L.divIcon({
        className: 'nearby-marker',
        html: `<div class="marker-icon ${place.type}"></div>`,
        iconSize: [30, 30]
      });

      const marker = L.marker(place.coordinates, { icon }).addTo(map);
      markersRef.current[place.type] = marker;

      marker.bindPopup(`
        <div style="text-align: center; direction: rtl;">
          <h4 style="margin: 3px; color: #2563eb;">${place.name}</h4>
          <p style="color: #666;">${place.type}</p>
          <button 
            onclick="window.showPlaceDetails('${place.name}')"
            class="details-btn"
          >
            عرض التفاصيل
          </button>
        </div>
      `);
    });

    // إضافة مقياس الخريطة
    L.control.scale({
      imperial: false,
      position: 'bottomright'
    }).addTo(map);

    // إضافة دالة عرض تفاصيل المكان للنافذة
    (window as any).showPlaceDetails = (placeName: string) => {
      const place = nearbyPlaces.find(p => p.name === placeName);
      if (place) {
        setSelectedPlace(place);
      }
    };

    // تنظيف عند إزالة المكون
    return () => {
      map.remove();
      delete (window as any).showPlaceDetails;
    };
  }, [coordinates, name, address, image, markerIcon, nearbyPlaces, selectedTypes]);

  return (
    <>
      <NearbyPlacesFilter
        selectedTypes={selectedTypes}
        onTypeChange={handleTypeChange}
      />
      <div
        ref={mapContainerRef}
        className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg"
      />
      {selectedPlace && (
        <NearbyPlaceDetails
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      )}
      <style jsx global>{`
        .nearby-marker {
          background: white;
          border: 2px solid #2563eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .marker-icon {
          width: 20px;
          height: 20px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        .marker-icon.restaurant {
          background-image: url('/icons/restaurant.svg');
        }
        .marker-icon.hotel {
          background-image: url('/icons/hotel.svg');
        }
        .marker-icon.attraction {
          background-image: url('/icons/attraction.svg');
        }
        .details-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 5px;
          margin-top: 5px;
          cursor: pointer;
        }
        .details-btn:hover {
          background: #1d4ed8;
        }
      `}</style>
    </>
  );
};

export default MapComponent;
