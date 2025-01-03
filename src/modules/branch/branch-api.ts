import { Http } from '@/services/Http';
import type { Branch } from './branch-type';

const API_ENDPOINT = '/api/v1/branches';

export async function fetchBranchAutocompleteApi(signal: AbortSignal) {
  return await Http.get<SuccessResponse<Branch[]>>(API_ENDPOINT + '/autocomplete', undefined, { signal });
}
