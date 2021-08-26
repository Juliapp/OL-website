import { CustomMarkerIcon } from '@atoms';
import { useResult } from '@hooks';
import { divIcon } from 'leaflet';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Marker } from 'react-leaflet';

const MSolutions: React.FC = () => {
  const result = useResult();
  return (
    <>
      {result?.kSolution.map((item, index) => {
        return (
          <Marker
            position={item.candidate}
            key={`candidate-${index}`}
            icon={divIcon({
              className: 'custom-icon',
              html: ReactDOMServer.renderToString(
                <CustomMarkerIcon
                  key={`custom-marker-${index}`}
                  closable={false}
                  label={`${index + 1}`}
                />
              ),
              popupAnchor: [0, -45],
              iconSize: [48, 48],
              iconAnchor: [23, 50],
            })}
          ></Marker>
        );
      })}
    </>
  );
};

export default React.memo(MSolutions);
