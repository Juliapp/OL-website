import { iconArea } from '@assets';
import { useAreas, useFetchLocationData, useSelectId } from '@hooks';
import { icon } from 'leaflet';
import React, { useEffect } from 'react';
import { Marker, Tooltip } from 'react-leaflet';

const MAreas: React.FC = () => {
  const areas = useAreas();
  const { onFetchDeliveries, onFetchHubs } = useFetchLocationData();
  const { onSelectId } = useSelectId();

  useEffect(() => {}, [areas]);

  return areas ? (
    <>
      {areas.map((area, index) => (
        <Marker
          key={index}
          eventHandlers={{
            click: () => {
              onSelectId(area);
              onFetchDeliveries();
              onFetchHubs();
            },
          }}
          position={[area.lat, area.lng]}
          icon={icon({
            iconUrl: iconArea,
            iconSize: [48, 48],
            popupAnchor: [48, 48],
          })}
        >
          <Tooltip>{`Area ID: ${area.key}`}</Tooltip>
        </Marker>
      ))}
    </>
  ) : (
    <></>
  );
};

export default MAreas;
