import React, { Component } from 'react';
// import RouterContainer from './containers/RouterContainer';
import Footer from './Footer';
import AddTodo from './containers/Todo/AddTodo';
import VisibleTodoList from './containers/Todo/VisibleTodoList';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <RouterContainer /> */}
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
