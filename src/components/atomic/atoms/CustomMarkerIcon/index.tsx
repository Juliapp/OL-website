import React from 'react';
import { iconCandidate, close } from '@assets';
import './styles.css';

interface ICustomMarkerIcon {
  icon?: string;
  noti?: boolean;
  closable?: boolean;
  label?: string | number;
  onClickNotification?: () => void;
}

const CustomMarkerIcon: React.FC<ICustomMarkerIcon> = ({
  icon = iconCandidate,
  noti = true,
  closable = true,
  label,
  onClickNotification,
}) => {
  return (
    <div className="markericon-container">
      {noti ? (
        <div
          className="marker-notification"
          onClick={() => {
            onClickNotification?.();
          }}
        >
          {closable ? (
            <img src={close} alt="" />
          ) : (
            label ?? <div className="marker-label"> {label}</div>
          )}
        </div>
      ) : undefined}

      <img src={icon} alt="alt" />
    </div>
  );
};

export default React.memo(CustomMarkerIcon);
