import React from 'react';
import './styles.css';
import { loggiSymbol } from '../../../../assets/index';

interface ISquaredButton {
  icon?: string;
  styles?: React.CSSProperties;
}
const SquaredButton: React.FC<ISquaredButton> = ({ icon, styles }) => {
  return (
    <button style={styles} className="squared-button forward">
      {icon && <img className="squared-icon" src={icon} alt="icon" />}
    </button>
  );
};

export default SquaredButton;
