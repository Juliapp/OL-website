import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useAreas() {
  return useContextSelector(OLDContext, (state) => state.areas);
}
