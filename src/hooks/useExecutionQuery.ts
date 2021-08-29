import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useExecutionQuery() {
  const executionQuery = useContextSelector(
    OLDContext,
    (state) => state.executionQuery
  );

  // const {query, isEmpty, create, update, del} = executionQuery;

  return { ...executionQuery };
}
