import { combineReducers } from 'redux';

import browse from './browse/reducer';
import theme from './theme/reducer';

export default combineReducers({
  browse,
  theme,
});
