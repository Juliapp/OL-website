import { icon, LeafletMouseEventHandlerFn } from 'leaflet';
import react from 'react';
import { useCallback } from 'react';
import { Marker, useMapEvent } from 'react-leaflet';
import { iconArea } from '../../assets';
import { useCandidates } from '../../hooks';

const MapEventControl: React.FC<{ editCandidates: boolean }> = ({
  editCandidates,
}) => {
  const { onNewCandidate, candidates } = useCandidates();
  const onClick: LeafletMouseEventHandlerFn = useCallback(
    (e) => {
      // editCandidates && console.log(e.latlng);
      if (editCandidates) {
        onNewCandidate({ lat: e.latlng.lat, lng: e.latlng.lng });
      }
    },
    [editCandidates]
  );

  useMapEvent('click', onClick);
  return (
    <>
      {candidates.able.map((item, index) => {
        return (
          <Marker
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
