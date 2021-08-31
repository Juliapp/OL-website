import React, { useEffect } from 'react';
import './styles.css';

export interface IToggleSwitch {
  toggled?: boolean;
  setIsToggled?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const ToggleSwitch: React.FC<IToggleSwitch> = ({
  toggled = false,
  setIsToggled,
}) => {
  useEffect(() => {
    setIsToggled?.(false);
  }, []);

  return (
    <div className="switch-container">
      <input
        onChange={() => {
          setIsToggled?.(!toggled);
        }}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={toggled ? { background: '#00BAFF' } : {}}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
