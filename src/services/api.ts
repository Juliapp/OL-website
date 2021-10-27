import axios from 'axios';
import https from 'https';

import { ICandidate, IPoint, IServiceRunResponse200 } from '../utils/types';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export async function getAlgorithms() {
  const response = await api.get<string[]>('/get-algorithms');
  console.log('getAlgorithms() ', response.data);
  return response.data;
}

export async function getAreas() {
  const response = await api.get<{ key: string; lat: number; lng: number }[]>(
    '/get-regions'
  );
  console.log('getAreas() ', response.data);
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
    data: params,
  });

  return response.data;
}

interface IRegionDataParams {
  location_id: string;
  point_type: string;
  percentage?: number;
}

export async function getRegionData(params: IRegionDataParams) {
  const response = await api.get<IPoint[]>('/get-region-data', {
    params,
  });
  return response.data;
}

export default api;
export type { IRunParams };
