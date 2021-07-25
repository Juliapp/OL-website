import React from 'react';
import './styles.css';

export interface ISquaredButton {
  squaredIcon?: string;
  styles?: React.CSSProperties;
}
const SquaredButton: React.FC<ISquaredButton> = ({ squaredIcon, styles }) => {
  return (
    <button style={styles} className="squared-button forward">
      {squaredIcon && (
        <img className="squared-icon" src={squaredIcon} alt="icon" />
      )}
    </button>
  );
};

export default SquaredButton;
