import React, { ReactEventHandler } from 'react';
import './styles.css';
interface IDropDown {
  onSelected: ReactEventHandler<HTMLSelectElement>;
  options: { id: string; value: string; label: string }[];
  label?: string;
}
const DropDown: React.FC<IDropDown> = ({ onSelected, options, label }) => {
  return (
    <div className="dropContainer forward">
      <h3>{label && label}</h3>
      <select name="" onSelect={onSelected} id="" className="forward dropdown">
        {options.map((item) => {
          return (
            <option id={item.id} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
