import { loggiHub } from '@assets';
import { useFetchLocationData } from '@hooks';
import { icon } from 'leaflet';
import React, { useEffect } from 'react';
import { Marker, Tooltip } from 'react-leaflet';

const MHubs: React.FC = () => {
  const { hubs } = useFetchLocationData();
  useEffect(() => {
    console.log(hubs);
  }, [hubs]);

  return hubs ? (
    <>
      {hubs.map((hub, index) => (
        <Marker
          key={index}
          position={[hub.lat, hub.lng]}
          icon={icon({
            iconUrl: loggiHub,
            iconSize: [64, 64],
            popupAnchor: [0, 0],
            iconAnchor: [31, 64],
          })}
        >
          <Tooltip>{`Hub`}</Tooltip>
        </Marker>
      ))}
    </>
  ) : (
    <></>
  );
};

export default React.memo(MHubs);
