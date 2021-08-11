import { iconDelivery } from '@assets';
import { useFetchLocationData } from '@hooks';
import { icon } from 'leaflet';
import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';

const MDeliveries: React.FC = () => {
  const { deliveries } = useFetchLocationData();
  return deliveries ? (
    <>
      {deliveries.map((hub, index) => (
        <Marker
          key={index}
          position={[hub.lat, hub.lng]}
          icon={icon({
            iconUrl: iconDelivery,
            iconSize: [5, 5],
            popupAnchor: [5, 5],
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
