import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useFetchInitialData() {
  const fetch = useContextSelector(
    OLDContext,
    (context) => context.fetchInitialData
  );
  return { fetch };
}
