import React from 'react';
import Map from './components/Map';
import { OLQProvider } from './context/OLQContext';
import { useFechAlgorithms } from './hooks';
// import MapComponent from './components/MapComponent';

export default function App() {
  const { fetch } = useFechAlgorithms();
  React.useEffect(() => {
    (async () => {
      await fetch;
    })();
  }, []);

  return (
    <OLQProvider>
      <Map />
    </OLQProvider>
  );
}
