import React from 'react';
import { loggiLogo } from '../../../../assets';
import './styles.css';
// import { Container } from './styles';

const LoggiBanner: React.FC = () => {
  return (
    <div className="painel forward">
      <img src={loggiLogo} alt="" />
      Optimal Location Queries
    </div>
  );
};

export default LoggiBanner;
