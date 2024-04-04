import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Position {
  lat: number;
  lng: number;
}
async function reverseGeocode(lat: number, lng: number): Promise<string> {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.display_name; // The full address
    } catch (error) {
      console.error("Failed to fetch address:", error);
      return 'Address not found';
    }
}

const MapClickHandler: React.FC<{ setPosition: (pos: Position) => void,setAddress: (address: string) => void }> = ({ setPosition,setAddress }) => {
  useMapEvents({
    async click(e) {
        const clickedLat = e.latlng.lat;
        const clickedLng = e.latlng.lng;
        const address = await reverseGeocode(e.latlng.lat, e.latlng.lng);
        
        setPosition(e.latlng);     
        setAddress(address);
      
        
    },
  });

  return null;
};

const MapComponent: React.FC<{ setAddress: (address: string) => void }>= ({ setAddress }) => {
  const [position, setPosition] = useState<Position>({ lat: 47.4871480514, lng:  19.0570914383 });
  return (
    <div className="h-[400px] w-full">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
        </Marker>
        <MapClickHandler setPosition={setPosition} setAddress={setAddress} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;