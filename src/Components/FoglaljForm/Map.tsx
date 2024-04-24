import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// A `Position` interfész definiálja a földrajzi pozíció típusát, amely tartalmazza a szélességi (lat) és hosszúsági (lng) koordinátákat.
interface Position {
  lat: number;
  lng: number;
}
// A `reverseGeocode` függvény segítségével lekérdezhetjük a címeket a földrajzi koordináták alapján az OpenStreetMap API-t használva.
async function reverseGeocode(lat: number, lng: number): Promise<string> {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.display_name; 
    } catch (error) {
      console.error("Hiba keletkezett fetchelés során", error);
      return 'Válaszott cím nem található!';
    }
}
// A `MapClickHandler` komponens kezeli a térkép kattintás eseményeit.
// Amikor a térképre kattintanak, lekéri az adott hely földrajzi koordinátáit és a címét.
const MapClickHandler: React.FC<{ setPosition: (pos: Position) => void,setAddress: (address: string) => void }> = ({ setPosition,setAddress }) => {
  useMapEvents({
    async click(e) {
        const clickedLat = e.latlng.lat;
        const clickedLng = e.latlng.lng;
        const address = await reverseGeocode(e.latlng.lat, e.latlng.lng);
        
        setPosition(e.latlng);   // Beállítja az új pozíciót.  
        setAddress(address); // Beállítja az új címet.
      
        
    },
  });

  return null;
};
// A `MapComponent` komponens egy térképet jelenít meg a kezdeti pozícióval és egy jelölővel.
const MapComponent: React.FC<{ setAddress: (address: string) => void }>= ({ setAddress }) => {
  const [position, setPosition] = useState<Position>({ lat: 47.4871480514, lng:  19.0570914383 });// Kezdeti pozíció beállítása.
  return (
    <div className="h-[300px] w-full">
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