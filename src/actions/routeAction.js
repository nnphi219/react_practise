import { SET_ROUTER_URL } from './actionTypes';

export function setRouterUrl(url) {
    return {
        type: SET_ROUTER_URL,
        body: url
    };
}