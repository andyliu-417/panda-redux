import { combineReducers } from 'redux-immutable';
import { reducer as reduxDemoReducer } from '../components/ReduxDemo/redux';

export default combineReducers({ reduxDemo: reduxDemoReducer });
