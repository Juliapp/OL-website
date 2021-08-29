import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'leaflet/dist/leaflet.css';
import { OLQProvider } from './context/OLQContext';
import { ExecutionQueryContextProvider } from 'context/ExecutionQueryContext';

ReactDOM.render(
  <React.StrictMode>
    <OLQProvider>
      <ExecutionQueryContextProvider>
        <App />
      </ExecutionQueryContextProvider>
    </OLQProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
