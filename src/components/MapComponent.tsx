"use client";

interface MapComponentProps {
  coordinates: [number, number];
}

const MapComponent: React.FC<MapComponentProps> = ({ coordinates }) => {
  const [lat, lng] = coordinates;

  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="flex justify-center items-center mt-14">
      <button
        onClick={openGoogleMaps}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
      >
        عرض الخريطة
      </button>
    </div>
  );
};

export default MapComponent;
