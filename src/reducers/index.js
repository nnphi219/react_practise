import { combineReducers } from 'redux';

import routeReducer from './routeReducer';
import todoReducer from './todoReducer';
import visibilityFilterReducer from './visibilityFilterReducer';
import productsReducer from './product/products';
import productFilterTextReducer from './product/filterText';
import productInStockOnlyReducer from './product/inStockOnly';

var routeCombineReducer = {
    route: routeReducer
};

var todosCombineReducer = {
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer
};

var productsCombineReducer = {
    products: productsReducer,
    productFilterText: productFilterTextReducer,
    productInStockOnly: productInStockOnlyReducer
};

var jsonCombineReducers = {
    ...routeCombineReducer,
    ...todosCombineReducer,
    ...productsCombineReducer
};

export default combineReducers(jsonCombineReducers);