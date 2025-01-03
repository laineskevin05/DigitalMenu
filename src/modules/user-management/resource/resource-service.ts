import { useQuery } from '@tanstack/vue-query';
import { fetchResourceWithPermissionApi } from './resource-api';

export function getFetchResourceWithPermissionsQueryKey() {
  return ['fetchResourceWithPermissions'];
}

export function useFetchResourceWithPermissions() {
  return useQuery({
    queryKey: getFetchResourceWithPermissionsQueryKey(),
    queryFn: ({ signal }) => fetchResourceWithPermissionApi(signal)
  });
}