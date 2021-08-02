import { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';
import * as api from '../services/api';
import { resolveAlgorithmOptions } from '../utils';
import {
  ICandidate,
  IServiceRunResponse200,
  IServiceRunResponse422,
} from '../utils/types';

interface IArea {
  key: string;
  lat: number;
  lng: number;
}

interface IMapCandidates {
  able: ICandidate[];
  disable: ICandidate[];
}
interface OLDContextType {
  algorithmDropDownOptions:
    | { id: string; value: string; label: string }[]
    | undefined;
  areas: { key: string; lat: number; lng: number }[] | undefined;

  initializeData: (
    responseAlgorithms: string[],
    responseAreas: IArea[]
  ) => void;

  onSelectId: (area: IArea | undefined) => void;
  selectedId: IArea | undefined;
  selectedAlgorithm: string | undefined;
  onSelectAlgorithm: (algorithm?: string | undefined) => void;
  // onRun: api.IRunParams;
  onRun: () => void;

  candidates: IMapCandidates;
  onNewCandidate: (candidate: ICandidate) => void;
  onRemoveCandidate: (index: number) => void;
  onResetCandidates: () => void;
  runResult: IServiceRunResponse200 | undefined;
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

  const [candidates, setCandidates] = useState<IMapCandidates>({
    able: [],
    disable: [],
  });

  const [runResult, setRunResult] = useState<
    IServiceRunResponse200 | undefined
  >();

  const initializeData = useCallback(
    (responseAlgorithms: string[], responseAreas: IArea[]) => {
      const resolvedAlgorithms = resolveAlgorithmOptions(responseAlgorithms);
      setAlgorithmDropDownOptions(resolvedAlgorithms);
      setAreas(responseAreas);
      setSelectedAlgorithm(responseAlgorithms[0]);
    },
    []
  );

  const onSelectId = useCallback(
    (area?: { key: string; lat: number; lng: number }) => {
      setSelectedId(area);
    },
    []
  );

  const onSelectAlgorithm = useCallback((algorithm?: string) => {
    setSelectedAlgorithm(algorithm);
  }, []);

  const onNewCandidate = useCallback((candidate: ICandidate) => {
    setCandidates((state) => {
      return {
        able: [...state.able, candidate],
        disable: [...state.disable],
      };
    });
  }, []);

  const onRemoveCandidate = useCallback((index: number) => {
    setCandidates((state) => {
      const removed = state.able[index];

      return {
        able: [
          ...state.able.filter((value, i) => {
            return i !== index;
          }),
        ],
        disable: [...state.disable, removed],
      };
    });
  }, []);

  const onResetCandidates = useCallback(() => {
    setCandidates({ able: [], disable: [] });
  }, []);

  const onRun = useCallback(() => {
    if (selectedAlgorithm && selectedId) {
      api
        .run({
          // location_id: selectedId.key,
          location_id: 'test',
          candidates: candidates.able,
          algorithm: selectedAlgorithm,
          k: candidates.able.length,
        })
        .then((result) => {
          setRunResult(result);
        });
    }
  }, [candidates.able, selectedAlgorithm, selectedId]);

  return (
    <OLDContext.Provider
      value={{
        initializeData,
        algorithmDropDownOptions,
        areas,
        onSelectId,
        selectedId,
        selectedAlgorithm,
        onSelectAlgorithm,
        onRun,
        candidates,
        onNewCandidate,
        onRemoveCandidate,
        onResetCandidates,
        runResult,
      }}
    >
      {children}
    </OLDContext.Provider>
  );
};
