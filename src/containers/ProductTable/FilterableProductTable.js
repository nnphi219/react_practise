import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../components/ProductTable/SearchBar';
import ProductTable from '../../components/ProductTable/ProductTable';
import { setFilterText, setInStockOnly } from '../../actions/product/product';

class FilterableProductTable extends React.Component {
    render(){
        let props = this.props;
        return(
            <div>
                <SearchBar 
                    inStockOnly={props.productInStockOnly}

                    onFilterTextChange={props.onFilterTextChange}
                    onInStockOnlyChange={props.onInStockOnlyChange}
                />
                <ProductTable
                    products={props.products}
                    filterText={props.filterText}
                    inStockOnly={props.inStockOnly}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
        filterText: state.productFilterText,
        inStockOnly: state.productInStockOnly
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilterTextChange: (text) => dispatch(setFilterText(text)),
        onInStockOnlyChange: (inStockOnly) => dispatch(setInStockOnly(inStockOnly))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableProductTable);