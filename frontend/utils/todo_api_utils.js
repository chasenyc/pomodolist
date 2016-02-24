import AppActions from '../actions/app_actions';

export default {
  fetchTodos() {
    return $.ajax({
      url: "api/todos",
      type: 'GET',
      dataType: 'json',
      success: (todos) => { AppActions.receiveTodos(todos) }
    });
  },

  markTodo(id, value) {
    return $.ajax({
      url: 'api/todos/' + id,
      type: 'PUT',
      data: {todo: {completed: value}},
      success: (todo) => { AppActions.receiveTodo(todo) }
    })
  },

  createTodo(todoData) {
    return $.ajax({
      url: "/api/todos",
      type: "POST",
      data: {todo: todoData},
      success: (todo) => { AppActions.receiveTodo(todo) }
    });
  },

  addPomodo(id, amount) {
    return $.ajax({
      url: 'api/todos/' + id,
      type: 'PUT',
      data: {todo: {pom_total: amount}},
      success: (todo) => { AppActions.receiveTodo(todo) }
    })
  },

  deleteTodo(id) {
    return $.ajax({
      url: 'api/todos/' + id,
      type: 'DELETE',
      success: (todo) => { AppActions.receiveTodo(todo) }
    })
  }

}
