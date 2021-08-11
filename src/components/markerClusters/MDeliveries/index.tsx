import { iconDelivery } from '@assets';
import { useFetchLocationData } from '@hooks';
import { icon } from 'leaflet';
import React, { useEffect } from 'react';
import { Marker, Tooltip } from 'react-leaflet';

const MDeliveries: React.FC = () => {
  const { deliveries } = useFetchLocationData();
  useEffect(() => {
    console.log(deliveries);
  }, [deliveries]);

  return deliveries ? (
    <>
      {deliveries.map((hub, index) => (
        <Marker
          key={index}
          position={[hub.lat, hub.lng]}
          icon={icon({
            iconUrl: iconDelivery,
            iconSize: [15, 15],
            popupAnchor: [20, 20],
          })}
        >
          <Tooltip>{`delivery`}</Tooltip>
        </Marker>
      ))}
    </>
  ) : (
    <></>
  );
};

export default MDeliveries;
