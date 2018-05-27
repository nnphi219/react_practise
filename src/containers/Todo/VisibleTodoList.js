import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/Todo/TodoList';
import { TODO } from '../../actions/actionTypes';
import { toggleTodo } from '../../actions/todoAction';

class TodoListContainer extends React.Component {
  render() {
    console.log("TodoListContainer Render");
    return (
      <TodoList
        todos={this.props.todos}
        toggleTodo={this.props.toggleTodo}
      />
    );
  }
}

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case TODO.SHOW_ALL:
      return todos
    case TODO.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case TODO.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => {
  console.log("TodoListContainer state");
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);