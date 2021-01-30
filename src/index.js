import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Home/index';
import * as serviceWorker from './Services/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
