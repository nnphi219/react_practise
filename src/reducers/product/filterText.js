import { createReducer } from '../reducerUtilities';
import { PRODUCT } from '../../actions/actionTypes';

function setFilterText(state, action) {
    return action.body;
}

export default createReducer("", {
    [PRODUCT.SET_FILTER_TEXT]: setFilterText
});