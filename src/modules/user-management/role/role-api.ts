import { Http } from '@/services/Http';
import type { Role, RoleRequest } from './role-type';

const API_ENDPOINT = '/api/v1/roles';

export async function fetchRolesApi(signal: AbortSignal) {
  const response = await Http.get<SuccessResponse<Role[]>>(API_ENDPOINT, undefined, { signal });
  return response?.data;
}

export async function fetchRoleAutocompleteApi(signal: AbortSignal, brancCode: string) {
  const response = await Http.get<SuccessResponse<Role[]>>(`${API_ENDPOINT}/autocomplete?branchCode=${brancCode}`, undefined, { signal });
  return response?.data;
}

export async function fetchRoleByIdApi(id: string, signal: AbortSignal) {
  const response = await Http.get<SuccessResponse<Role>>(`${API_ENDPOINT}/${id}`, undefined, { signal });
  return response?.data;
}

export async function createRoleApi(requestBody: RoleRequest) {
  return await Http.post<SuccessResponse<String>>(`${API_ENDPOINT}`, requestBody);
}

export async function updateRoleApi(requestBody: RoleRequest, id: string) {
  return await Http.put<SuccessResponse<String>>(`${API_ENDPOINT}/${id}`, requestBody);
}
