import { createReducer } from './reducerUtilities';
import { SET_ROUTER_URL } from '../actions/actionTypes';

function setRouteUrl(state, action) {
    return action.body;
}

export default createReducer('/', {
    [SET_ROUTER_URL]: setRouteUrl
});