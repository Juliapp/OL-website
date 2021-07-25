import React from 'react';
import { IToggleSwitch, ToggleSwitch } from '../../atoms';
import './styles.css';

// import { Container } from './styles';

export interface IToggleSec extends IToggleSwitch {
  title?: string;
  subtitle?: string;
}
const ToggleSec: React.FC<IToggleSec> = ({
  toggled = false,
  setIsToggled,
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
      <ToggleSwitch toggled={toggled} setIsToggled={setIsToggled} />
    </div>
  );
};

export default ToggleSec;
