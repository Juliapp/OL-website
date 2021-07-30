import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'leaflet/dist/leaflet.css';
import { OLQProvider } from './context/OLQContext';

ReactDOM.render(
  <React.StrictMode>
    <OLQProvider>
      <App />
    </OLQProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
