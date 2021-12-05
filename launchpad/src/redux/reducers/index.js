import { combineReducers } from 'redux';
import place from './postalcode';
import universities from './universities';
import countries from './countries';
import posts from './posts';

const rootReducer = combineReducers({
  universities: universities,
  countries: countries,
  posts: posts,
  place: place,

});

export default rootReducer;