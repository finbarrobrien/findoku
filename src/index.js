import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore } from 'redux';
import App from './App';
import sudokuApp from './reducers/reducer';

let store = createStore(sudokuApp, devToolsEnhancer());

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
