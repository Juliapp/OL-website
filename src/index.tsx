import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'leaflet/dist/leaflet.css';
import { OLQProvider } from './context/OLQContext';
import { ExecutionQueryContextProvider } from 'context/ExecutionQueryContext';

ReactDOM.render(
  <React.StrictMode>
    <ExecutionQueryContextProvider>
      <OLQProvider>
        <App />
      </OLQProvider>
    </ExecutionQueryContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
