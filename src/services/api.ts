import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export async function getAlgorithms() {
  const response = await api.get<string[]>('/get-algorithms');
  return response.data;
}

export async function getAreas() {
  const response = await api.get<{ key: string; lat: number; lng: number }[]>(
    '/get-areas'
  );
  return response.data;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface IRunResponse200 {
  currentSolution: {
    result: number;
    detail: object | undefined | null;
  };
  KSolution: {
    attraction: number;
    candidate: Coordinates;
    result: number;
    detail: object | undefined | null;
  }[];
}

interface IRunResponse422 {
  message: string;
}
interface IRunParams {
  location_id: string;
  candidates: number[];
  algorithm: string;
  k: number;
}

export async function run(params: IRunParams) {
  const response = await api.get<IRunResponse200 | IRunResponse422>('/run', {
    data: params,
  });
  return response.data;
}

export default api;
export type { IRunParams };
