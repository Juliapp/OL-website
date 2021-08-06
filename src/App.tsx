import React from 'react';
import Map from './components/Map';
import { useInitializeData, useLoadingScreen } from './hooks';
import * as api from './services/api';
// import MapComponent from './components/MapComponent';

export default function App() {
  const { fetch } = useInitializeData();
  const { onChangeLoadingScreen } = useLoadingScreen();

  React.useEffect(() => {
    onChangeLoadingScreen({ message: 'Initializing' });
    const init = async () => {
      const responseAlgorithms = await api.getAlgorithms();
      const responseAreas = await api.getAreas();
      fetch(responseAlgorithms, responseAreas);
      onChangeLoadingScreen();
    };
    init();
  }, [fetch, onChangeLoadingScreen]);

  return <Map />;
}
