import { iconDelivery } from '@assets';
import { useFetchLocationData } from '@hooks';
import { icon } from 'leaflet';
import React, { useEffect } from 'react';
import { Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './styles.css';
const MDeliveries: React.FC = () => {
  const { deliveries } = useFetchLocationData();
  useEffect(() => {}, [deliveries]);

  return (
    <>
      {deliveries && (
        <MarkerClusterGroup>
          {deliveries.map((address, index) => (
            <Marker
              key={index}
              position={address}
              icon={icon({
                iconUrl: iconDelivery,
                iconSize: [30, 30],
              })}
            />
          ))}
        </MarkerClusterGroup>
      )}
    </>
  );
};

export default React.memo(MDeliveries);
