import { useCallback, useMemo, useState } from 'react';
import { createContext } from 'use-context-selector';
import * as api from '../services/api';
import { resolveAlgorithmOptions } from '../utils';

interface IArea {
  key: string;
  lat: number;
  lng: number;
}
interface OLDContextType {
  algorithmDropDownOptions:
    | { id: string; value: string; label: string }[]
    | undefined;
  areas: { key: string; lat: number; lng: number }[] | undefined;
  fetchInitialData: Promise<void>;
  onSelectId: (area: IArea | undefined) => void;
  selectedId: IArea | undefined;
  selectedAlgorithm: string | undefined;
  onSelectAlgorithm: (algorithm?: string | undefined) => void;
  // onRun: api.IRunParams;
  onRun: () => void;
}

export const OLDContext = createContext<OLDContextType>({} as OLDContextType);

export const OLQProvider: React.FC = ({ children }) => {
  const [algorithmDropDownOptions, setAlgorithmDropDownOptions] = useState<
    { id: string; value: string; label: string }[] | undefined
  >();

  const [areas, setAreas] =
    useState<{ key: string; lat: number; lng: number }[]>();

  const [selectedAlgorithm, setSelectedAlgorithm] = useState<
    string | undefined
  >();

  const [selectedId, setSelectedId] = useState<undefined | IArea>();
  const fetchInitialData = useMemo(async () => {
    api.getAlgorithms().then((data) => {
      const resolved = resolveAlgorithmOptions(data);
      setAlgorithmDropDownOptions(resolved);
    });

    api.getAreas().then((data) => {
      setAreas(data);
    });
  }, []);

  const onSelectId = useCallback(
    (area?: { key: string; lat: number; lng: number }) => {
      setSelectedId(area);
    },
    []
  );

  const onSelectAlgorithm = useCallback((algorithm?: string) => {
    setSelectedAlgorithm(algorithm);
  }, []);

  const onRun = useCallback(() => {
    api
      .run({
        location_id: 'rj',
        candidates: [-22.9666855, -43.6941723, -22.9581481, -43.684247],
        algorithm: 'minmax',
        k: 1,
      })
      .then((result) => {
        console.log(result);
      });
  }, []);

  return (
    <OLDContext.Provider
      value={{
        fetchInitialData,
        algorithmDropDownOptions,
        areas,
        onSelectId,
        selectedId,
        selectedAlgorithm,
        onSelectAlgorithm,
        onRun,
      }}
    >
      {children}
    </OLDContext.Provider>
  );
};
