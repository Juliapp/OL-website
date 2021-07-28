import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useAlgorithmSelector() {
  return useContextSelector(OLDContext, (state) => state.algorithmSelector);
}
