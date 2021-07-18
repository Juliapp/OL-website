import React from 'react';
import MapComponent from './components/MapComponent';

export default function App() {
  return (
    <MapComponent>
      <div className="sidebar">
        Longitude: {0} | Latitude: {0} | Zoom: {0}
      </div>
    </MapComponent>
  );
}
