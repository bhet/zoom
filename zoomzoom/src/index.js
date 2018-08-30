import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchEntry } from './redux/action/extracash_action';
import { fetchRegisterReading } from './redux/action/reg_reading_action';
import { fetchTotal } from './redux/action/total_inflow_action';

let newStore = store();

newStore.dispatch(fetchEntry());
newStore.dispatch(fetchRegisterReading());
newStore.dispatch(fetchTotal());

ReactDOM.render(<Provider store={newStore}><App /></Provider>, document.getElementById('root'));
