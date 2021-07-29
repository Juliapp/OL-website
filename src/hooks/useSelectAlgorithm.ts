import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useSelectAlgorithm() {
  const onSelectAlgorithm = useContextSelector(
    OLDContext,
    (state) => state.onSelectAlgorithm
  );
  const selectedAlgorithm = useContextSelector(
    OLDContext,
    (state) => state.selectedAlgorithm
  );
  return { onSelectAlgorithm, selectedAlgorithm };
}
