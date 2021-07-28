import React from 'react';
import { loggiLogo } from '../../../../assets';
import './styles.css';
// import { Container } from './styles';

const LoggiBanner: React.FC = () => {
  return (
    <div className="painel forward">
      <img src={loggiLogo} alt="" />
      <h2>Optimal Location Queries</h2>
    </div>
  );
};

export default React.memo(LoggiBanner);
