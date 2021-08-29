import React from 'react';
import Map from './components/Map';
import { useExecutionQuery, useInitializeData } from './hooks';
import * as api from './services/api';
// import MapComponent from './components/MapComponent';

export default function App() {
  const { fetch } = useInitializeData();
  // const { onChangeLoadingScreen } = useLoadingScreen();
  const { create, del } = useExecutionQuery();

  React.useEffect(() => {
    const id = 'dataInitializer';
    create({ id, label: 'Fetching initial data...' });
    const init = async () => {
      const responseAlgorithms = await api.getAlgorithms();
      const responseAreas = await api.getAreas();
      fetch(responseAlgorithms, responseAreas);
      del(id);
    };
    init();
  }, [fetch]);

  return <Map />;
}
