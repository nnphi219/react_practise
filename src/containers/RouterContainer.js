import React from 'react';
import { connect } from 'react-redux';
import Main from '../Router/Main';

import { setRouterUrl } from '../actions/routeAction';

class RouterContainer extends React.Component {
    render(){
        return(
            <Main 
                route={this.props.route}
                onRoute={this.props.onRoute}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        route: state.route
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRoute: (text) => {
            dispatch(setRouterUrl(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterContainer);