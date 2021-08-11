import { iconDelivery, loggiHub, place } from '@assets';
import { useFetchLocationData } from '@hooks';
import { icon } from 'leaflet';
import React, { useEffect } from 'react';
import { Marker, Tooltip } from 'react-leaflet';

const MHubs: React.FC = () => {
  const { hubs } = useFetchLocationData();
  useEffect(() => {
    console.log('os hubs são: ', hubs);
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
            popupAnchor: [64, 64],
            iconAnchor: [31, 66],
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
