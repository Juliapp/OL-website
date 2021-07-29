import { useCallback, useEffect, useMemo, useState } from 'react';
import { createContext } from 'use-context-selector';
import * as api from '../services/api';
import { resolveAlgorithmOptions } from '../utils';

interface IArea {
  key: string;
  lat: number;
  lng: number;
}
interface OLDContextType {
  algorithmSelector: { id: string; value: string; label: string }[] | undefined;
  areas: { key: string; lat: number; lng: number }[] | undefined;
  fetchInitialData: Promise<void>;
  onSelectId: (area: IArea) => void;
  selectedId: IArea | undefined;
}

export const OLDContext = createContext<OLDContextType>({} as OLDContextType);

export const OLQProvider: React.FC = ({ children }) => {
  const [algorithmSelector, setAlgorithmSelector] = useState<
    { id: string; value: string; label: string }[] | undefined
  >();
  const [areas, setAreas] =
    useState<{ key: string; lat: number; lng: number }[]>();
  const [selectedId, setSelectedId] = useState<undefined | IArea>();
  const fetchInitialData = useMemo(async () => {
    api.getAlgorithms().then((data) => {
      const resolved = resolveAlgorithmOptions(data);
      setAlgorithmSelector(resolved);
    });

    api.getAreas().then((data) => {
      setAreas(data);
    });
  }, []);

  const onSelectId = useCallback(
    (area: { key: string; lat: number; lng: number }) => {
      setSelectedId(area);
    },
    []
  );

  return (
    <OLDContext.Provider
      value={{
        fetchInitialData,
        algorithmSelector,
        areas,
        onSelectId,
        selectedId,
      }}
    >
      {children}
    </OLDContext.Provider>
  );
};
