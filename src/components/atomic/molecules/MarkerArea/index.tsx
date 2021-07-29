import { icon } from 'leaflet';
import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import { iconArea } from '../../../../assets';
import { useSelectId } from '../../../../hooks';

// import { Container } from './styles';

interface IMarkerArea {
  area: { key: string; lat: number; lng: number };
}
const MarkerArea: React.FC<IMarkerArea> = ({ area }) => {
  const { onSelectId } = useSelectId();
  return (
    <Marker
      eventHandlers={{
        click: () => {
          onSelectId(area);
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
