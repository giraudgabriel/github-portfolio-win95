import { combineReducers } from 'redux';

import windowReducer from './window/window.reducer';

const rootReducer = combineReducers({
  windowReducer
});

export default rootReducer;