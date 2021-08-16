import React, { useCallback } from 'react';
import { divIcon, LeafletMouseEventHandlerFn } from 'leaflet';
import { Marker, useMapEvent } from 'react-leaflet';

import ReactDOMServer from 'react-dom/server';

import { useCandidates, useResult } from '@hooks';
import { HomePageMode } from '../../../utils';
import { CustomMarkerIcon } from '@atoms';

interface IMapEventControl {
  mode: HomePageMode;
  editCandidates: boolean;
}
const MapEventControl: React.FC<IMapEventControl> = ({
  editCandidates,
  mode,
}) => {
  const { onNewCandidate, candidates, onRemoveCandidate } = useCandidates();
  const onClick: LeafletMouseEventHandlerFn = useCallback(
    (e) => {
      // editCandidates && console.log(e.latlng);
      if (editCandidates) {
        onNewCandidate({ lat: e.latlng.lat, lng: e.latlng.lng });
      }
    },
    [editCandidates, onNewCandidate]
  );

  const result = useResult();

  useMapEvent('click', onClick);
  return (
    <>
      {mode === HomePageMode.QUERY_FORM && result ? (
        result.kSolution.map((item, index) => {
          return (
            <Marker
              eventHandlers={{
                click: () => {
                  onRemoveCandidate(index);
                },
              }}
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
        })
      ) : (
        <>
          {candidates.able.map((item, index) => {
            return (
              <Marker
                eventHandlers={{
                  click: () => {
                    onRemoveCandidate(index);
                  },
                }}
                position={item}
                key={`marker-${index}`}
                icon={divIcon({
                  className: 'custom-icon',
                  html: ReactDOMServer.renderToString(
                    <CustomMarkerIcon key={`custom-marker-${index}`} />
                  ),
                  popupAnchor: [0, -45],
                  iconSize: [48, 48],
                  iconAnchor: [23, 50],
                })}
              ></Marker>
            );
          })}
        </>
      )}
    </>
  );
};

export default MapEventControl;
