import React from 'react';
import './styles.css';

export interface ISquaredButton {
  squaredIcon?: string;
  styles?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const SquaredButton: React.FC<ISquaredButton> = ({
  squaredIcon,
  styles,
  onClick,
}) => {
  return (
    <button style={styles} className="squared-button forward" onClick={onClick}>
      {squaredIcon && (
        <img className="squared-icon" src={squaredIcon} alt="icon" />
      )}
    </button>
  );
};

export default React.memo(SquaredButton);
