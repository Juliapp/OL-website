interface ICandidate {
  lat: number;
  lng: number;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface IServiceRunResponse200 {
  currentSolution: {
    result: number;
    detail: object | undefined | null;
  };
  kSolution: {
    attraction: number;
    candidate: Coordinates;
    result: number;
    detail: object | undefined | null;
  }[];
}

interface IServiceRunResponse422 {
  message: string;
}

interface ILoadingScreen {
  message?: string;
}

interface IMapCandidates {
  able: ICandidate[];
  disable: ICandidate[];
}

export type {
  ICandidate,
  IServiceRunResponse200,
  IServiceRunResponse422,
  ILoadingScreen,
  IMapCandidates,
};
