import React, { useEffect, useState } from 'react';
import { Map } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import './styles.css';
const MapLeaflet: React.FC = () => {
  const [lng, setLng] = useState(-55.0967);
  const [lat, setLat] = useState(-12.4347);
  const [zoom, setZoom] = useState(5.2);
  const [map, setMap] = useState<Map>();

  useEffect(() => {
    map?.on('move', () => {
      const center = map.getCenter();
      setLat(parseFloat(center.lat.toFixed(4)));
      setLng(parseFloat(center.lng.toFixed(4)));
      setZoom(map.getZoom());
    });
  }, [map]);

  const flyToBrazil = () => {
    map?.flyTo({ lng: -55.0967, lat: -12.4347 }, 5.2);
  };

  return (
    <MapContainer
      className="map-container"
      center={[lat, lng]}
      zoom={zoom}
      whenCreated={setMap}
    >
      <TileLayer
        // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN}`}
      />

      <div className="sidebar forward">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>

      <button className="button forward" onClick={flyToBrazil}>
        fly
      </button>
    </MapContainer>
  );
};

export default MapLeaflet;
