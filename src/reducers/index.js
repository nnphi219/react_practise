import { combineReducers } from 'redux';

import routeReducer from './routeReducer';
import todoReducer from './todoReducer';
import visibilityFilterReducer from './visibilityFilterReducer';

export default combineReducers({
    route: routeReducer,
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer
});