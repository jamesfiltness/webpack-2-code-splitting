import React from 'react';
import ReactDOM from 'react-dom';
import App from './universal/app';

ReactDOM.hydrate((
  <App />
), document.getElementById('app'))
