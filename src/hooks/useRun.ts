import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useRun() {
  return useContextSelector(OLDContext, (state) => state.onRun);
}
