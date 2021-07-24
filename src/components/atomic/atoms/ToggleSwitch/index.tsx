import React, { useEffect, useState } from 'react';
import './styles.css';

interface IToggleSwitch {
  isOn?: boolean;
  setIsOn?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  // handleToggle,
}

const ToggleSwitch: React.FC<IToggleSwitch> = ({ isOn = false, setIsOn }) => {
  return (
    <div className="forward switch-container">
      <input
        onChange={() => {
          setIsOn?.(!isOn);
        }}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={isOn ? { background: '#00BAFF' } : {}}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
