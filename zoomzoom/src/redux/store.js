import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import entry from './reducer/extracash_reducer';
import register from './reducer/register_reducer';
import cashinflow from './reducer/cashinflow_reducer';

const middleware = [logger, thunk];

const rootReducer = combineReducers({entry, register, cashinflow});

export default () => createStore(rootReducer, applyMiddleware(...middleware));
