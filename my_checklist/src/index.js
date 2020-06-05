// Archivos de importación, que son tomados desde node_modules
// o bien, desde el directorio que se indique
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//render de ReactDOM es una función que recibe 2 parámetros:
//que se va arenderizar y
//dónde lo va a renderizar
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//El serviceworker viene por defecto en React
serviceWorker.unregister();
