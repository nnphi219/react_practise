import { createReducer } from '../reducerUtilities';
import { PRODUCT } from '../../actions/actionTypes';

function setInStockOnly(state, action) {
    return action.body;
}

export default createReducer(false, {
    [PRODUCT.SET_IN_STOCK_ONLY]: setInStockOnly
});