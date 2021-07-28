import { information } from '../assets';

const fullScreenBR = { latlng: { lng: -55.0967, lat: -12.4347 }, zoom: 5.2 };

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

const mapLegend = {
  AREA_SELECTOR: [{ icon: information, label: 'Polos da Loggi' }],
  QUERY_FORM: [
    { icon: information, label: 'teste' },
    { icon: information, label: 'teste' },
    { icon: information, label: 'teste' },
  ],
};

export { fullScreenBR, resolveAlgorithmOptions, HomePageMode, mapLegend };
