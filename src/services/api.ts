import axios from 'axios';
import {
  ICandidate,
  IServiceRunResponse200,
  IServiceRunResponse422,
} from '../utils/types';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export async function getAlgorithms() {
  const response = await api.get<string[]>('/get-algorithms');
  return response.data;
}

export async function getAreas() {
  const response = await api.get<{ key: string; lat: number; lng: number }[]>(
    '/get-regions'
  );
  return response.data;
}
interface IRunParams {
  location_id: string;
  candidates: ICandidate[];
  algorithm: string;
  k: number;
}

export async function run(params: IRunParams) {
  const response = await api.post<IServiceRunResponse200>('/run', {
    params,
  });
  return response.data;
}

export default api;
export type { IRunParams };
