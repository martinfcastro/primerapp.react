import React from 'react'; // la biblioteca en si misma que permite crear las interfases web.
import ReactDOM from 'react-dom'; // react enfocada al navegador
//Estas dos etiquetas son necesarias para escribir el código.

import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


