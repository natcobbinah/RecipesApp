import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from '../src/app/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//using react-redux
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>
)


//old redux pattern, where state and dispatch through top level components
//and accessed through props
/*const render = () => {
  //pass state and dispatch props to app

  root.render(
    <React.StrictMode>
      <App state = {store.getState()} dispatch = {store.dispatch}/>
    </React.StrictMode>
  );
}

render();
store.subscribe(render);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
