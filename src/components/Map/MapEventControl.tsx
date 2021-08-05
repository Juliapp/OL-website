import React, { useCallback } from 'react';
import { icon, LeafletMouseEventHandlerFn } from 'leaflet';
import { Marker, useMapEvent } from 'react-leaflet';
import { place } from '@assets';
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
            <>
              <Marker
                eventHandlers={{
                  click: () => {},
                }}
                position={item}
                key={index}
                icon={icon({
                  iconUrl: place,
                  iconSize: [48, 48],
                  popupAnchor: [48, 48],
                  iconAnchor: [23, 40],
                })}
              ></Marker>
            </>
          );
        })}
    </>
  );
};

export default MapEventControl;
