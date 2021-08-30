import React from 'react';
import './styles.css';

interface IResultItem {
  index: number;
  result: number;
  attraction: number;
  detail?: object | null;
  itemClickHandler?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const ResultItem: React.FC<IResultItem> = ({
  index,
  result,
  attraction,
  itemClickHandler,
}) => {
  return (
    <div className="result-item-container" onClick={itemClickHandler}>
      <div className="result-enum">{index}.</div>
      <div className="result-grid">
        <div className="result-param">
          Resultado
          <div className="result-number">
            {result.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
        </div>
        <div className="result-param">
          Atração
          <div className="result-attraction">{attraction}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
export type { IResultItem };
