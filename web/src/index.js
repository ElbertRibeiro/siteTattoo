import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './pages/Home/App';
import * as serviceWorker from './Services/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
