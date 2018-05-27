import { TODO } from './actionTypes';

let nextTodoId = 0;
export function addTodo(text) {
    return {
        type: TODO.ADD_TODO,
        body: {
            id: nextTodoId++,
            text,
            completed: false
        }
    };
}

export function setVisibilityFilter(filter) {
    return {
        type: 'SET_VISIBILITY_FILTER',
        body: filter
    };
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        body: id
    };
}