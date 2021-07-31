import React from 'react';
import { iconArea } from '../../../../assets';
import './styles.css';

interface IResultItem {
  tetst?: string;
}

const ResultItem: React.FC<IResultItem> = () => {
  return (
    <div className="result-item-container">
      <div className="result-enum">1.</div>
      <img src={iconArea} alt="" />
      <div className="result-grid">
        <div className="result-param">
          Resultado
          <div className="result-number">31.2312,00</div>
        </div>
        <div className="result-param">
          Atração
          <div className="result-attraction">3.894</div>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
export type { IResultItem };
