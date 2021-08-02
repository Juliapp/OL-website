import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useCandidates() {
  const candidates = useContextSelector(
    OLDContext,
    (state) => state.candidates
  );
  const onNewCandidate = useContextSelector(
    OLDContext,
    (state) => state.onNewCandidate
  );
  const onRemoveCandidate = useContextSelector(
    OLDContext,
    (state) => state.onRemoveCandidate
  );
  const onResetCandidates = useContextSelector(
    OLDContext,
    (state) => state.onResetCandidates
  );

  return { candidates, onNewCandidate, onRemoveCandidate, onResetCandidates };
}
