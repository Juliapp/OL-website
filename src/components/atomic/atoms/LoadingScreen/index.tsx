import { useLoadingScreen } from '@hooks';
import React from 'react';
import './styles.css';
const LoadingScreen: React.FC = () => {
  const { loadingScreen } = useLoadingScreen();

  return (
    <div className="loadingscreen">
      <div className="loader"></div>
      <div className="loadingscreen-message">{loadingScreen?.message}</div>
    </div>
  );
};

export default LoadingScreen;
