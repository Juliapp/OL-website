import React from 'react';
import { WebAsideContainer } from '@organisms';
import './styles.css';
const WebSelectArea: React.FC = () => {
  return (
    <WebAsideContainer>
      <div className="select-area-message default-shadow">
        <h2>Selecione uma das regiões para começar</h2>
      </div>
    </WebAsideContainer>
  );
};

export default WebSelectArea;
