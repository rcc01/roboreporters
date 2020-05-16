import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import Card from './Card';

import * as serviceWorker from './serviceWorker';
import 'tachyons';


// ReactDOM.render(
//   <React.StrictMode>

//   </React.StrictMode>,
//   document.getElementById('root')
// );



// Hello it is a component!:
//Within the Hello component you can add properties {}.
ReactDOM.render(
   <App />
   , document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
