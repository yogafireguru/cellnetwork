import { combineReducers } from 'redux';
import mapReducer from './map_reduers';
export default combineReducers ({
   user:mapReducer
});