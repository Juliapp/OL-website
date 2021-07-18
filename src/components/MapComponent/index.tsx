import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './style.css';
import ComponentProps from '../../types/props';

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN
  ? process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN
  : '';

//  = process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN;

export default function MapComponent({ children }: ComponentProps) {
  const container = () => {
    return <div></div>;
  };

  const mapContainer = useRef<any>(container);

  const map = useRef<any>(null);
  const [lng, setLng] = useState(-55.5503);
  const [lat, setLat] = useState(-14.2291);
  const [zoom, setZoom] = useState(4);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
      <div ref={mapContainer} className="map-container" />
      <div className="children-container">{children}</div>

      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      Hi */}
    </>
  );
}
