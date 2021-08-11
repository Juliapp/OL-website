import axios from 'axios';
import zlib from 'zlib';

// import

import { ICandidate, IServiceRunResponse200 } from '../utils/types';

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

export async function getRegionData() {
  api.get<string>('/get-region-data').then((response) => {
    console.log(response);
  });
}

export default api;
export type { IRunParams };
