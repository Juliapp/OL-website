import React from 'react';
import './styles.css';
import { useExecutionQuery } from '@hooks';
const LoadingScreen: React.FC = () => {
  const { query } = useExecutionQuery();
  return (
    <div className="loadingscreen">
      <div className="loader"></div>
      <div className="loadingscreen-message">{query[0].label}</div>
    </div>
  );
};

export default React.memo(LoadingScreen);
