import { useEffect, useMemo, useState } from 'react';
import { createContext } from 'use-context-selector';
import * as api from '../services/api';
import { resolveAlgorithmOptions } from '../utils';

interface OLDContextType {
  algorithmSelector: { id: string; value: string; label: string }[] | undefined;
  areas: { key: string; lat: number; lng: number }[] | undefined;
  fetchInitialData: Promise<void>;
}

export const OLDContext = createContext<OLDContextType>({} as OLDContextType);

export const OLQProvider: React.FC = ({ children }) => {
  const [algorithmSelector, setAlgorithmSelector] = useState<
    { id: string; value: string; label: string }[] | undefined
  >();

  const [areas, setAreas] =
    useState<{ key: string; lat: number; lng: number }[]>();

  const fetchInitialData = useMemo(async () => {
    api.getAlgorithms().then((data) => {
      const resolved = resolveAlgorithmOptions(data);
      setAlgorithmSelector(resolved);
    });

    api.getAreas().then((data) => {
      setAreas(data);
    });
  }, []);

  return (
    <OLDContext.Provider value={{ fetchInitialData, algorithmSelector, areas }}>
      {children}
    </OLDContext.Provider>
  );
};
