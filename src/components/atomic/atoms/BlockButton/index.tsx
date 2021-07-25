import React from 'react';
import './styles.css';

export interface IBlockButton {
  styles?: React.CSSProperties;
  BButtonLabel?: string;
}
const BlockButton: React.FC<IBlockButton> = ({ styles, BButtonLabel }) => {
  return (
    <button style={styles} className="block-button forward">
      {BButtonLabel && BButtonLabel}
    </button>
  );
};

export default BlockButton;
