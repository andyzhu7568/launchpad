import { combineReducers } from 'redux';
import universities from './universities';
import countries from './countries';
import posts from './posts';

const rootReducer = combineReducers({
  universities: universities,
  countries: countries,
  posts: posts,
});

export default rootReducer;