import { information } from '../assets';

const fullScreenBR = { latlng: { lng: -55.0967, lat: -12.4347 }, zoom: 5.2 };

//make this be called from the api
const algorithmOptions = [
  { id: 'minmax', value: 'minmax', label: 'Minmax' },
  { id: 'minsum', value: 'minsum', label: 'Minsum' },
];

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

export { fullScreenBR, algorithmOptions, HomePageMode, mapLegend };
