import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import { geocodeReducer, weatherReducer, tokenReducer } from './headerReducer';
import { partnerReducer } from './partnerReducer'


const rootReducer = combineReducers({
  loginReducer: loginReducer,
  geocodeReducer: geocodeReducer,
  weatherReducer: weatherReducer,
  tokenReducer: tokenReducer,
  partnerReducer: partnerReducer,
});
export default rootReducer;