import React from 'react';
import Map from './components/Map';
import { OLQProvider } from './context/OLQContext';
import { useFetchInitialData } from './hooks';
// import MapComponent from './components/MapComponent';

export default function App() {
  const { fetch } = useFetchInitialData();

  React.useEffect(() => {
    const init = async () => {
      await fetch;
    };
    init();
  }, [fetch]);

  return (
    <OLQProvider>
      <Map />
    </OLQProvider>
  );
}
