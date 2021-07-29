import React from 'react';
import { useAlgorithmDropDownOpions } from '../../../../hooks';
import { BlockButton, DropDown, IDropDown } from '../../atoms';
import { IToggleSec, ToggleSec } from '../../molecules';
import './styles.css';

// import { Container } from './styles';
export interface IQueryForm extends IDropDown, IToggleSec {}
const QueryForm: React.FC<IQueryForm> = ({
  toggled,
  setIsToggled,
  onDropDownChange,
}) => {
  const options = useAlgorithmDropDownOpions();
  return (
    <div className="query-form">
      <ToggleSec
        toggled={toggled}
        setIsToggled={setIsToggled}
        title="Modo edição de candidatos"
        subtitle="Ative essa opção para adicionar e remover candidatos"
      />

      <DropDown
        dropDownLabel="Algoritmo Optimal Location"
        options={options}
        onDropDownChange={onDropDownChange}
      />

      <BlockButton BButtonLabel="Start" />
    </div>
  );
};

export default React.memo(QueryForm);
