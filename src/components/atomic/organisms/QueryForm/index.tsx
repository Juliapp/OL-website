import React from 'react';
import { BlockButton, DropDown } from '../../atoms';
import { ToggleSec } from '../../molecules';
import './styles.css';

// import { Container } from './styles';
interface IQueryForm {
  isOn?: boolean;
  setIsOn?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  options: { id: string; value: string; label: string }[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}
const QueryForm: React.FC<IQueryForm> = ({
  isOn,
  setIsOn,
  options,
  onChange,
}) => {
  return (
    <div className="query-form">
      <ToggleSec
        isOn={isOn}
        setIsOn={setIsOn}
        title="Modo edição de candidatos"
        subtitle="Ative essa opção para adicionar e remover candidatos"
      />

      <DropDown
        label="Algoritmo Optimal Location"
        options={options}
        onChange={onChange}
      />

      <BlockButton label="Start" />
    </div>
  );
};

export default QueryForm;
