import React, { useCallback } from 'react';
import { divIcon, icon, LeafletMouseEventHandlerFn } from 'leaflet';
import { Marker, Popup, useMapEvent } from 'react-leaflet';

import ReactDOMServer from 'react-dom/server';

// import EnhancedMarker from 'react-leaflet-enhanced-marker';

import { place, iconArea } from '@assets';
import { useCandidates, useResult } from '@hooks';
import { HomePageMode } from '../../utils';
import { CustomMarkerIcon } from '@atoms';
import MDeliveries from 'components/markers/MDeliveries';
import MHubs from 'components/markers/MHubs';

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
          <MHubs />
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
