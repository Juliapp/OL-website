import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useSelectId() {
  const onSelectId = useContextSelector(
    OLDContext,
    (state) => state.onSelectId
  );
  const selectedArea = useContextSelector(
    OLDContext,
    (state) => state.selectedId
  );
  return { onSelectId, selectedArea };
}
