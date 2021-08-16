import { iconDelivery } from '@assets';
import { useFetchLocationData } from '@hooks';
import L, { icon, Map } from 'leaflet';
import React, { useEffect } from 'react';
// import { Marker, Tooltip } from 'react-leaflet';
interface IMDeliveries {
  map?: Map;
}
const MDeliveries: React.FC<IMDeliveries> = ({ map }) => {
  const { deliveries } = useFetchLocationData();
  useEffect(() => {
    if (map && deliveries) {
      for (const delivery of deliveries) {
        L.circleMarker(delivery, { radius: 5, color: '#3388ff' }).addTo(map);
      }
    }
  }, [deliveries, map]);

  return <></>;
};

//   return deliveries ? (
//     <>
//       {deliveries.map((hub, index) => (
//         <Marker
//           key={index}
//           position={[hub.lat, hub.lng]}
//           icon={icon({
//             iconUrl: iconDelivery,
//             iconSize: [15, 15],
//             popupAnchor: [20, 20],
//           })}
//         >
//           <Tooltip>{`delivery`}</Tooltip>
//         </Marker>
//       ))}
//     </>
//   ) : (
//     <></>
//   );
// };

export default MDeliveries;
