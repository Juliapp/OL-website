import React, { useEffect } from 'react';
import './styles.css';
import { useExecutionQuery } from '@hooks';
const LoadingScreen: React.FC = () => {
  const { current } = useExecutionQuery();
  useEffect(() => {}, [current]);

  return (
    <div className="loadingscreen">
      <div className="loader"></div>
      <div className="loadingscreen-message">{current?.label}</div>
    </div>
  );
};

export default LoadingScreen;
