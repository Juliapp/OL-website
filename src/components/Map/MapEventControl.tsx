import React, { useCallback } from 'react';
import { icon, LeafletMouseEventHandlerFn } from 'leaflet';
import { Marker, useMapEvent } from 'react-leaflet';
import { iconArea } from '@assets';
import { useCandidates, useResult } from '@hooks';
import { HomePageMode } from '../../utils';

interface IMapEventControl {
  mode: HomePageMode;
  editCandidates: boolean;
}
const MapEventControl: React.FC<IMapEventControl> = ({
  editCandidates,
  mode,
}) => {
  const { onNewCandidate, candidates } = useCandidates();
  const onClick: LeafletMouseEventHandlerFn = useCallback(
    (e) => {
      // editCandidates && console.log(e.latlng);
      if (editCandidates) {
        onNewCandidate({ lat: e.latlng.lat, lng: e.latlng.lng });
      }
    },
    [editCandidates, onNewCandidate]
  );

  const results = useResult();

  useMapEvent('click', onClick);
  return (
    <>
      {mode === HomePageMode.QUERY_FORM &&
        candidates.able.map((item, index) => {
          return (
            <Marker
              eventHandlers={{
                click: () => {
                  console.log('clicou');
                  console.log(candidates.able);
                },
              }}
              position={item}
              key={index}
              icon={icon({
                iconUrl: iconArea,
                iconSize: [48, 48],
                popupAnchor: [48, 48],
              })}
            ></Marker>
          );
        })}
    </>
  );
};

export default MapEventControl;
