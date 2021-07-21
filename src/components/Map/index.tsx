import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map: React.FC = () => {
  return (
    <MapContainer
      center={[-55.5503, -14.2291]}
      zoom={4}
      style={{ width: '100vw', height: '100vh' }}
    >
      <TileLayer
        // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN}`}
      />
    </MapContainer>
  );
};

export default Map;
