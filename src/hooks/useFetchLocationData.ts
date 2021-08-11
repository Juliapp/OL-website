import { useContextSelector } from 'use-context-selector';
import { OLDContext } from '../context/OLQContext';

export function useFetchLocationData() {
  const hubs = useContextSelector(OLDContext, (state) => state.hubs);
  const deliveries = useContextSelector(
    OLDContext,
    (state) => state.deliveries
  );
  const onFetchHubs = useContextSelector(
    OLDContext,
    (state) => state.onFetchHubs
  );
  const onFetchDeliveries = useContextSelector(
    OLDContext,
    (state) => state.onFetchDeliveries
  );
  return { hubs, deliveries, onFetchHubs, onFetchDeliveries };
}
