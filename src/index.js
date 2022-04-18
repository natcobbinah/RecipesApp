import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from '../src/app/App';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => {
  //pass state and dispatch props to app

  root.render(
    <React.StrictMode>
      <App state = {store.getState()} dispatch = {store.dispatch}/>
    </React.StrictMode>
  );
}

render();
store.subscribe(render);
// Subscribe render to changes to the `store`

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
