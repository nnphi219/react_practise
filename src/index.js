import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import Main from './Router/Main';
import { createStore } from 'redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

//Router
// ReactDOM.render(
// <Main />, document.getElementById('root'));

const store = createStore(reducers);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();