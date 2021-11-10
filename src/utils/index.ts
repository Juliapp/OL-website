import { iconCandidate, iconDelivery, loggiHub, iconArea } from '@assets';

const fullScreenBR = { latlng: { lng: -55.0967, lat: -12.4347 }, zoom: 5 };

const resolveAlgorithmOptions = (algorithms: string[]) => {
  return algorithms.map((item) => {
    var toLo = item.toLowerCase();
    return {
      id: toLo,
      value: toLo,
      label: toLo[0].toUpperCase() + toLo.slice(1).toLowerCase(),
    };
  });
};

enum HomePageMode {
  AREA_SELECTOR = 'AREA_SELECTOR',
  QUERY_FORM = 'QUERY_FORM',
}

enum FormMode {
  FORM = 'FORM',
  RESULTS = 'RESULTS',
}

const mapLegend = {
  AREA_SELECTOR: [{ icon: iconArea, label: 'Polos da Loggi' }],
  QUERY_FORM: [
    { icon: loggiHub, label: 'Hubs atuais' },
    { icon: iconDelivery, label: 'Deliveries' },
    { icon: iconCandidate, label: 'Hubs Candidatos' },
  ],
};

export {
  fullScreenBR,
  resolveAlgorithmOptions,
  HomePageMode,
  mapLegend,
  FormMode,
};
