import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useInitializeData() {
  const fetch = useContextSelector(
    OLDContext,
    (context) => context.initializeData
  );
  return { fetch };
}
