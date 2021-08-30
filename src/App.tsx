import { dispatchType } from 'context/ExecutionQueryContext';
import React from 'react';
import Map from './components/Map';
import { useExecutionQuery, useInitializeData } from './hooks';
import * as api from './services/api';
// import MapComponent from './components/MapComponent';

export default function App() {
  const { fetch } = useInitializeData();
  // const { onChangeLoadingScreen } = useLoadingScreen();
  const { executionQueryDispatch } = useExecutionQuery();

  React.useEffect(() => {
    const id = 'dataInitializer';

    executionQueryDispatch({
      type: dispatchType.CREATE,
      param: { id, label: 'Fetching initial data...' },
    });

    const init = async () => {
      const responseAlgorithms = await api.getAlgorithms();
      const responseAreas = await api.getAreas();
      fetch(responseAlgorithms, responseAreas);
      await new Promise((resolve) => setTimeout(resolve, 5000));
    };
    init();

    executionQueryDispatch({
      type: dispatchType.DELETE,
      param: { id },
    });
  }, [executionQueryDispatch, fetch]);

  return <Map />;
}
