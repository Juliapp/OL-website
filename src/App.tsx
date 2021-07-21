import React from 'react';
import Map from './components/Map';
// import MapComponent from './components/MapComponent';

export default function App() {
  return (
    <Map>
      <div className="sidebar">
        Longitude: {0} | Latitude: {0} | Zoom: {0}
      </div>
    </Map>
  );
}
