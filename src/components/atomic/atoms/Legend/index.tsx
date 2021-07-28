import React from 'react';
import './styles.css';

export interface ILegend {
  legendItems?: { icon: string; label: string }[];
}
const Legend: React.FC<ILegend> = ({ legendItems }) => {
  return (
    <div className="legend-container">
      <h2 className="legend-title">Legenda</h2>
      <div className="legend-items">
        {legendItems?.map((item) => {
          return (
            <div className="legend-item-container" key={item.label}>
              <img src={item.icon} alt="item-icon" />
              <h3>{item.label}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Legend;
