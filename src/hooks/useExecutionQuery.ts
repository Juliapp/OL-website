import { ExecutionQueryContext } from 'context/ExecutionQueryContext';
import { useContextSelector } from 'use-context-selector';

export function useExecutionQuery() {
  const isEmpty = useContextSelector(
    ExecutionQueryContext,
    (state) => state.state.isEmpty
  );

  const current = useContextSelector(
    ExecutionQueryContext,
    (state) => state.state.query[0]
  );

  const executionQueryDispatch = useContextSelector(
    ExecutionQueryContext,
    (state) => state.dispatch
  );

  return { isEmpty, current, executionQueryDispatch };
}
