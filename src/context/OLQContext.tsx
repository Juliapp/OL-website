import { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';
import * as api from '@api';
import { resolveAlgorithmOptions } from '../utils';
import {
  IArea,
  ICandidate,
  ILoadingScreen,
  IMapCandidates,
  IPoint,
  IServiceRunResponse200,
} from '../utils/types';

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

  candidates: IMapCandidates;
  onNewCandidate: (candidate: ICandidate) => void;
  onRemoveCandidate: (index: number) => void;
  onResetCandidates: () => void;

  runResult: IServiceRunResponse200 | undefined;

  loadingScreen: ILoadingScreen | undefined;

  onChangeLoadingScreen: (loading?: ILoadingScreen | undefined) => void;

  hubs: IPoint[] | undefined;
  onFetchHubs: (location_id: string) => void;
  deliveries: IPoint[] | undefined;
  onFetchDeliveries: (location_id: string) => void;
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

  const [loadingScreen, setLoadingScreen] = useState<
    ILoadingScreen | undefined
  >();

  const [hubs, setHubs] = useState<IPoint[] | undefined>();
  const [deliveries, setDeliveries] = useState<IPoint[] | undefined>();

  const onChangeLoadingScreen = useCallback((loading?: ILoadingScreen) => {
    setLoadingScreen(loading);
  }, []);

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
  }, []);

  const onRun = useCallback(() => {
    onChangeLoadingScreen({ message: 'Fetching data' });
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
          onChangeLoadingScreen();
        });
    }
  }, [candidates.able, selectedAlgorithm, selectedId, onChangeLoadingScreen]);

  const onFetchHubs = useCallback((location_id: string) => {
    api
      .getRegionData({
        location_id,
        point_type: 'hubs',
      })
      .then((result) => {
        setHubs(result);
      });
  }, []);

  const onFetchDeliveries = useCallback((location_id: string) => {
    api
      .getRegionData({
        location_id: 'test',
        point_type: 'deliveries',
      })
      .then((result) => {
        setDeliveries(result);
      });
  }, []);

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
        loadingScreen,
        onChangeLoadingScreen,
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
