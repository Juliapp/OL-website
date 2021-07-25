import React from 'react';
import './styles.css';

export interface IBlockButton {
  styles?: React.CSSProperties;
  label?: string;
}
const BlockButton: React.FC<IBlockButton> = ({ styles, label }) => {
  return (
    <button style={styles} className="block-button forward">
      {label && label}
    </button>
  );
};

export default BlockButton;
