import React from 'react';
import { IQueryForm, QueryForm, WebAsideContainer } from '../../organisms';
import './styles.css';
export interface IWebOLForm extends IQueryForm {}
const WebOLForm: React.FC<IWebOLForm> = ({
  onDropDownChange,
  toggled,
  setIsToggled,
}) => {
  return (
    <WebAsideContainer>
      <div className="form-container">
        <QueryForm
          onDropDownChange={onDropDownChange}
          toggled={toggled}
          setIsToggled={setIsToggled}
        />
      </div>
    </WebAsideContainer>
  );
};

export default WebOLForm;
