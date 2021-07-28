import { useCallback, useEffect, useMemo, useState } from 'react';
import { createContext } from 'use-context-selector';
import * as api from '../services/api';
import { resolveAlgorithmOptions } from '../utils';

interface OLDContextType {
  algorithmSelector: { id: string; value: string; label: string }[] | undefined;
  fetchAlgorithms: Promise<void>;
}

export const OLDContext = createContext<OLDContextType>({} as OLDContextType);

export const OLQProvider: React.FC = ({ children }) => {
  const [algorithmSelector, setAlgorithmSelector] = useState<
    { id: string; value: string; label: string }[] | undefined
  >();

  const fetchAlgorithms = useMemo(async () => {
    console.log('useMemo foi');
    await api.getAlgorithms().then((data) => {
      const resolved = resolveAlgorithmOptions(data);
      console.log(resolved);
      setAlgorithmSelector(resolved);
    });
  }, []);

  return (
    <OLDContext.Provider value={{ fetchAlgorithms, algorithmSelector }}>
      {children}
    </OLDContext.Provider>
  );
};
