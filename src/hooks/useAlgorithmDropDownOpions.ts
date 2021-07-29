import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useAlgorithmDropDownOpions() {
  return useContextSelector(
    OLDContext,
    (state) => state.algorithmDropDownOptions
  );
}
