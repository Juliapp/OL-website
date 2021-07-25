import React from 'react';
import './styles.css';
export interface IDropDown {
  onDropDownChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: { id: string; value: string; label: string }[];
  dropDownLabel?: string;
}
const DropDown: React.FC<IDropDown> = ({
  onDropDownChange,
  options,
  dropDownLabel,
}) => {
  return (
    <div className="dropContainer forward">
      <h2>{dropDownLabel && dropDownLabel}</h2>
      <select
        name="select"
        onChange={onDropDownChange}
        className="forward dropdown"
      >
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
