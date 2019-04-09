import { createStore } from 'redux';
import sudokuApp from '../reducers/reducer';

let store = createStore(sudokuApp);
//let store = createStore(sudokuApp, window.STATE_FROM_SERVER);

export default store;
