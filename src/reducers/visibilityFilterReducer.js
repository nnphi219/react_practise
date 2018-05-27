import { createReducer } from './reducerUtilities';
import { TODO } from '../actions/actionTypes';

function setVisibilityFilter(state, action) {
    return action.body;
}

export default createReducer(TODO.SHOW_ALL, {
    [TODO.SET_VISIBILITY_FILTER]: setVisibilityFilter
})