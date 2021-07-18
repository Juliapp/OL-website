import React, { useContext, useEffect, useState } from 'react';
import ReactMapboxGl, { MapContext } from 'react-mapbox-gl';
import { MapEvent } from 'react-mapbox-gl/lib/map-events';

import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';

const MapContainer = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN
    ? process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN
    : '',
});

export default function App() {
  const context = useContext(MapContext);

  context?.once('move', (e) => {
    e.stopPropagation();
  });

  // const [lng, setLng] = useState(-55.5503);
  // const [lat, setLat] = useState(-14.2291);
  // const [zoom, setZoom] = useState(4);
  const [mapState, setMapState] = useState({
    center: [-55.5503, -14.2291],
    zoom: 4,
  });

  useEffect(() => {
    console.log(mapState.center);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const onMove = (event: any) => {
  //   // console.log(event);
  //   // const a = event.transform._center.lng.toFixed(4);
  //   // props.lng = a;
  //   // setLng(a);
  //   // console.log(event.getCenter());
  //   const { lat: movedLat } = event.getCenter();
  //   setLat(movedLat.toFixed(4));

  //   // setLng(event.transform._center.lng.toFixed(4));
  //   // setLat(event.transform._center.lat.toFixed(4));
  //   // setZoom(event.transform._zoom.toFixed(2));
  //   // console.log(`
  //   //   lat: ${lat},
  //   //   lng: ${lng},
  //   //   zoom: ${zoom},
  //   // `);
  // };

  // const

  return (
    <>
      <MapContainer
        style="mapbox://styles/mapbox/streets-v11" // eslint-disable-line
        containerStyle={{
          height: '100vh',
          width: 'auto',
          overflow: 'hidden',
        }}
        onMove={(e) => {
          // e.stop();
          // const center = e.getCenter();
          // const zoom = e.getZoom();
          var center = mapState.center;

          if (context?.getCenter().lng && context?.getCenter().lat) {
            center = [context?.getCenter().lng, context?.getCenter().lat];
          }

          const zoom = context?.getZoom() || mapState.zoom;

          setMapState({
            center,
            zoom,
          });
        }}
        center={[-55.5503, -14.2291]}
        zoom={[4]}
      >
        {/* <ComponentThatRequiresMap /> */}

        <div className="sidebar">
          Longitude: {mapState.center[0]} | Latitude: {mapState.center[1]} |
          Zoom: {mapState.zoom}
        </div>
      </MapContainer>
    </>
  );
}
