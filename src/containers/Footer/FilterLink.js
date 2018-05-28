import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/todoAction';
import Link from '../../components/Todo/Link';

class FilterLink extends React.Component {
  render() {
    return (
      <Link
        active={this.props.active}
        onClick={this.props.onClick}
        children={this.props.children}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  var filterActive = ownProps.filter === state.visibilityFilter;
  return {
    active: filterActive
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);