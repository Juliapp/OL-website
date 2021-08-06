import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useLoadingScreen() {
  const loadingScreen = useContextSelector(
    OLDContext,
    (state) => state.loadingScreen
  );
  const onChangeLoadingScreen = useContextSelector(
    OLDContext,
    (state) => state.onChangeLoadingScreen
  );
  return { loadingScreen, onChangeLoadingScreen };
}
