import React, { Component } from 'react';
// import RouterContainer from './containers/RouterContainer';
import Footer from './Footer';
import AddTodo from './containers/Todo/AddTodo';
import VisibleTodoList from './containers/Todo/VisibleTodoList';

// import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './containers/ProductTable/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <RouterContainer /> */}
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
        <div>
          <FilterableProductTable />
        </div>
      </div>
    );
  }
}

export default App;
