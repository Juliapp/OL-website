import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import { IPoint } from '@types';
import { hubEmphasis, deliveryEmphasis } from '@assets';
import { icon } from 'leaflet';

interface IMDetail {
  detail?: object;
}

interface IExample {
  delivery: IPoint;
  origin: IPoint;
}

const MDetail: React.FC<IMDetail> = ({ detail }) => {
  try {
    // @ts-ignore: Unreachable code error
    const aux: IExample = { ...detail };
    return (
      <div style={{ zIndex: 2000 }}>
        {
          <Marker
            key="origin"
            position={aux.origin}
            icon={icon({
              iconUrl: hubEmphasis,
              iconSize: [64, 64],
              popupAnchor: [0, 0],
              iconAnchor: [31, 64],
            })}
          >
            <Tooltip>{`Origin`}</Tooltip>
          </Marker>
        }
        {
          <Marker
            key="delivery"
            position={aux.delivery}
            icon={icon({
              iconUrl: deliveryEmphasis,
              iconSize: [30, 30],
            })}
          />
        }
      </div>
    );
  } catch (error) {}

  return <></>;
};

export default MDetail;
