import React from 'react';
import Map from './components/Map';
import { useInitializeData } from './hooks';
import * as api from './services/api';
// import MapComponent from './components/MapComponent';

export default function App() {
  const { fetch } = useInitializeData();

  React.useEffect(() => {
    const init = async () => {
      const responseAlgorithms = await api.getAlgorithms();
      const responseAreas = await api.getAreas();
      fetch(responseAlgorithms, responseAreas);
    };
    init();
  }, [fetch]);

  return <Map />;
}
