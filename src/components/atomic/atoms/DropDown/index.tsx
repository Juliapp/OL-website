import React from 'react';
import './styles.css';
export interface IDropDown {
  onDropDownChange: React.ChangeEventHandler<HTMLSelectElement>;
  options?: { id: string; value: string; label: string }[];
  dropDownLabel?: string;
}
const DropDown: React.FC<IDropDown> = ({
  onDropDownChange,
  options,
  dropDownLabel,
}) => {
  return (
    <div className="dropContainer ">
      <h2>{dropDownLabel && dropDownLabel}</h2>
      <select
        name="select"
        // onSta
        onChange={onDropDownChange}
        className="dropdown"
      >
        {options ? (
          options.map((item) => {
            return (
              <option id={item.id} value={item.value} key={item.id}>
                {item.label}
              </option>
            );
          })
        ) : (
          <option>fetching data...</option>
        )}
      </select>
    </div>
  );
};

export default React.memo(DropDown);
