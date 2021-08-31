import React, { useCallback } from 'react';
import { useCandidates } from '@hooks';
import { divIcon } from 'leaflet';
import { Marker, useMapEvent } from 'react-leaflet';
import ReactDOMServer from 'react-dom/server';
import { CustomMarkerIcon } from '@atoms';

interface IMSolution {
  editCandidates: boolean;
}

const MCandidatesAble: React.FC<IMSolution> = ({ editCandidates }) => {
  const { onNewCandidate, candidates, onRemoveCandidate } = useCandidates();

  useMapEvent(
    'click',
    useCallback(
      (e) => {
        if (editCandidates) {
          onNewCandidate({ lat: e.latlng.lat, lng: e.latlng.lng });
        }
      },
      [editCandidates, onNewCandidate]
    )
  );

  return (
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
  );
};

export default MCandidatesAble;
