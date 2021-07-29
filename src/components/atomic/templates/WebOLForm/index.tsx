import React from 'react';
import { useSelectAlgorithm } from '../../../../hooks/useSelectAlgorithm';
import { IQueryForm, QueryForm, WebAsideContainer } from '../../organisms';
import './styles.css';

export interface IWebOLForm extends Omit<IQueryForm, 'onDropDownChange'> {}
const WebOLForm: React.FC<IWebOLForm> = ({ toggled, setIsToggled }) => {
  const { onSelectAlgorithm } = useSelectAlgorithm();
  return (
    <WebAsideContainer>
      <div className="form-container">
        <QueryForm
          onDropDownChange={(event) => {
            onSelectAlgorithm(event.target.value);
          }}
          toggled={toggled}
          setIsToggled={setIsToggled}
        />
      </div>
    </WebAsideContainer>
  );
};

export default WebOLForm;
