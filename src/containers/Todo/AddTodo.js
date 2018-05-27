import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoAction';

class AddTodo extends React.Component {
  render() {
    console.log("AddTodo render");
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!this.input.value.trim()) {
              return
            }
            this.props.onAddTodo(this.input.value);
            this.input.value = '';
          }}
        >
          <input ref={node => this.input = node} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

const mapStateTpProps = (state, ownProps) => {
  console.log("AddTodo state");
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(mapStateTpProps, mapDispatchToProps)(AddTodo)