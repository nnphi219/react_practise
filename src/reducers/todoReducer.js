import { createReducer } from './reducerUtilities';
import { TODO } from '../actions/actionTypes';

function addTodo(state, action) {
    return [...state, action.body];
}

function toggleTodo(state, action) {
    return action.body;
}

export default createReducer([], {
    [TODO.ADD_TODO]: addTodo,
    [TODO.TOGGLE_TODO]: toggleTodo
});