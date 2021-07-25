import React from 'react';
import './styles.css';
interface IDropDown {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: { id: string; value: string; label: string }[];
  label?: string;
}
const DropDown: React.FC<IDropDown> = ({ onChange, options, label }) => {
  return (
    <div className="dropContainer forward">
      <h2>{label && label}</h2>
      <select name="select" onChange={onChange} className="forward dropdown">
        {options.map((item) => {
          return (
            <option id={item.id} value={item.value} key={item.id}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
