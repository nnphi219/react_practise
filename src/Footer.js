import React from 'react';
import FilterLink from './containers/Footer/FilterLink';
import { TODO } from './actions/actionTypes';

class Footer extends React.Component {
  render() {
    return (
      <div >
        <span>Show: </span>
        <FilterLink filter={TODO.SHOW_ALL}>
          All
        </FilterLink>
        <FilterLink filter={TODO.SHOW_ACTIVE}>
          Active
        </FilterLink>
        <FilterLink filter={TODO.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </div >
    );
  }
}

export default Footer;