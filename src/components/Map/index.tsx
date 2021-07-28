import React, { useEffect, useState } from 'react';
import { Map } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import './styles.css';
import { AboutPanel, Legend } from '../atomic/atoms';
import { WebOLForm, WebSelectArea } from '../atomic/templates';
import { fullScreenBR, HomePageMode, mapLegend } from '../../utils';
import { useAlgorithmSelector } from '../../hooks';

const MapLeaflet: React.FC = () => {
  const [map, setMap] = useState<Map>();
  const [mode, setMode] = useState<HomePageMode>(HomePageMode.AREA_SELECTOR);
  const [legendItems, setLegendItems] = useState(mapLegend.AREA_SELECTOR);

  useEffect(() => {
    setLegendItems(mapLegend[mode]);
  }, [mode]);

  const flyToFullScreenBR = () => {
    map?.flyTo(fullScreenBR.latlng, fullScreenBR.zoom);
  };

  const [selectedAlgorithm, setSelectedAlgorithm] = useState();
  const [isOn, setisOn] = useState(false);

  return (
    <MapContainer
      className="map-container"
      center={[fullScreenBR.latlng.lat, fullScreenBR.latlng.lng]}
      zoom={fullScreenBR.zoom}
      whenCreated={setMap}
    >
      <div className="forward">
        {mode === HomePageMode.AREA_SELECTOR ? (
          <WebOLForm
            onDropDownChange={(event) => {}}
            toggled={isOn}
            setIsToggled={setisOn}
          />
        ) : (
          <WebSelectArea />
        )}

        <Legend legendItems={legendItems} />
      </div>
      <TileLayer
        // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        attribution={`&copy; <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>`}
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN}`}
      />
    </MapContainer>
  );
};

export default MapLeaflet;
