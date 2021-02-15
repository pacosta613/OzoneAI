import { combineReducers }  from 'redux';
import Api       from './api_reducer.js';

const rootReducer = combineReducers({
    api:         Api
});

export default rootReducer;