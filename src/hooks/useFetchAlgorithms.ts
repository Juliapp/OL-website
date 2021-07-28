import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useFechAlgorithms() {
  const fetch = useContextSelector(
    OLDContext,
    (context) => context.fetchAlgorithms
  );
  return { fetch };
}
