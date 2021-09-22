import { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';
import * as api from '@api';
import { resolveAlgorithmOptions } from '../utils';
import {
  IArea,
  ICandidate,
  IMapCandidates,
  IPoint,
  IServiceRunResponse200,
} from '../utils/types';
import { useExecutionQuery } from '@hooks';
import { dispatchType } from './ExecutionQueryContext';

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

  onRun: () => void;
  runResult: IServiceRunResponse200 | undefined;

  candidates: IMapCandidates;
  onNewCandidate: (candidate: ICandidate) => void;
  onRemoveCandidate: (index: number) => void;
  onResetCandidates: () => void;

  hubs: IPoint[] | undefined;
  onFetchHubs: (location_id: string) => void;
  deliveries: IPoint[] | undefined;
  onFetchDeliveries: (location_id: string) => void;
}

export const OLDContext = createContext<OLDContextType>({} as OLDContextType);

export const OLQProvider: React.FC = ({ children }) => {
  const { executionQueryDispatch } = useExecutionQuery();

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

  const [hubs, setHubs] = useState<IPoint[] | undefined>();
  const [deliveries, setDeliveries] = useState<IPoint[] | undefined>();

  const initializeData = useCallback(
    (responseAlgorithms: string[], responseAreas: IArea[]) => {
      // api.getRegionData();
      // onChangeLoadingScreen({ message: 'fetching data' });
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
    setRunResult(undefined);
  }, []);

  const onRun = useCallback(() => {
    if (selectedAlgorithm && selectedId) {
      const id = 'onRun';
      executionQueryDispatch({
        type: dispatchType.CREATE,
        param: { id, label: 'Calculating...' },
      });
      api
        .run({
          location_id: selectedId.key,
          // location_id: 'test',
          candidates: candidates.able,
          algorithm: selectedAlgorithm,
          k: candidates.able.length,
        })
        .then((result) => {
          setRunResult(result);
        })
        .finally(() => {
          executionQueryDispatch({ type: dispatchType.DELETE, param: { id } });
        });
    }
  }, [candidates.able, executionQueryDispatch, selectedAlgorithm, selectedId]);

  const onFetchHubs = useCallback(
    (location_id: string) => {
      const id = 'onFetchHubs';
      executionQueryDispatch({
        type: dispatchType.CREATE,
        param: { id, label: 'Fetching Hubs...' },
      });

      api
        .getRegionData({
          location_id,
          point_type: 'hubs',
        })
        .then((result) => {
          setHubs(result);
        })
        .finally(() => {
          executionQueryDispatch({ type: dispatchType.DELETE, param: { id } });
        });
    },
    [executionQueryDispatch]
  );

  const onFetchDeliveries = useCallback(
    (location_id: string) => {
      const id = 'onFetchDeliveries';
      executionQueryDispatch({
        type: dispatchType.CREATE,
        param: { id, label: 'Fetching Deliveries...' },
      });
      api
        .getRegionData({
          location_id,
          point_type: 'deliveries',
          percentage: 0.05,
        })
        .then((result) => {
          setDeliveries(result);
        })
        .finally(() => {
          executionQueryDispatch({ type: dispatchType.DELETE, param: { id } });
        });
    },
    [executionQueryDispatch]
  );

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
        hubs,
        onFetchHubs,
        deliveries,
        onFetchDeliveries,
      }}
    >
      {children}
    </OLDContext.Provider>
  );
};
