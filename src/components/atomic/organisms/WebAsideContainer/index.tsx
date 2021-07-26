import React from 'react';
import { information } from '../../../../assets';
import { LoggiBanner, SquaredButton } from '../../atoms';
import './styles.css';
const WebAsideContainer: React.FC = ({ children }) => {
  return (
    <div className="web-header-container">
      <SquaredButton squaredIcon={information} />
      <div className="panel-container">
        <div className="banner">
          <LoggiBanner />
        </div>
        {children}
      </div>
    </div>
  );
};

export default WebAsideContainer;
