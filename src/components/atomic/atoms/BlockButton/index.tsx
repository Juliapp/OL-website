import React from 'react';
import './styles.css';

export interface IBlockButton {
  styles?: React.CSSProperties;
  BButtonLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const BlockButton: React.FC<IBlockButton> = ({
  styles,
  BButtonLabel,
  onClick,
}) => {
  return (
    <button
      style={styles}
      className="block-button"
      type="submit"
      onClick={onClick}
    >
      {BButtonLabel && BButtonLabel}
    </button>
  );
};

export default React.memo(BlockButton);
