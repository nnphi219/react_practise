import { PRODUCT }  from '../actionTypes';

export function setFilterText(text){
    return{ 
        type: PRODUCT.SET_FILTER_TEXT,
        body: text
    }
}

export function setInStockOnly(inStockOnly){
    return {
        type: PRODUCT.SET_IN_STOCK_ONLY,
        body: inStockOnly
    }
}

export function setProducts(products) {
    return {
        type: PRODUCT.SET_PRODUCTS,
        body: products
    }
}