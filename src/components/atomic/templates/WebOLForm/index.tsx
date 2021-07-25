import React from 'react';
import { information } from '../../../../assets';
import { LoggiBanner, SquaredButton } from '../../atoms';
import { IQueryForm, QueryForm } from '../../organisms';
import './styles.css';
export interface IWebOLForm extends IQueryForm {}
const WebOLForm: React.FC<IWebOLForm> = ({
  onDropDownChange,
  options,
  toggled,
  setIsToggled,
}) => {
  return (
    <div className="forward web-container">
      <SquaredButton squaredIcon={information} />
      <div className="panel-container">
        <div className="banner">
          <LoggiBanner />
        </div>

        <div className="form-container">
          <QueryForm
            onDropDownChange={onDropDownChange}
            options={options}
            toggled={toggled}
            setIsToggled={setIsToggled}
          />
        </div>
      </div>
    </div>
  );
};

export default WebOLForm;
