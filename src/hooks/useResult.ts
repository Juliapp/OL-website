import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useResult() {
  return useContextSelector(OLDContext, (state) => state.runResult);
}
