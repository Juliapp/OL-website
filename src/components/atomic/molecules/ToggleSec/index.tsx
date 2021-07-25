import React from 'react';
import { ToggleSwitch } from '../../atoms';
import './styles.css';

// import { Container } from './styles';

export interface IToggleSec {
  isOn?: boolean;
  setIsOn?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  title?: string;
  subtitle?: string;
}
const ToggleSec: React.FC<IToggleSec> = ({
  isOn = false,
  setIsOn,
  title,
  subtitle,
}) => {
  return (
    <div className={'forward toggle-sec-container'}>
      <div className="title-description">
        <h2 className="title">{title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
      <div></div>
      <ToggleSwitch isOn={isOn} setIsOn={setIsOn} />
    </div>
  );
};

export default ToggleSec;
