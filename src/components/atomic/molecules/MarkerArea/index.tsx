import { icon } from 'leaflet';
import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import { iconArea } from '@assets';
import { useFetchLocationData, useSelectId } from '@hooks';

// import { Container } from './styles';

interface IMarkerArea {
  area: { key: string; lat: number; lng: number };
}

const MarkerArea: React.FC<IMarkerArea> = ({ area }) => {
  const { onSelectId } = useSelectId();

  const { onFetchDeliveries, onFetchHubs } = useFetchLocationData();
  return (
    <Marker
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
  );
};

export default MarkerArea;
