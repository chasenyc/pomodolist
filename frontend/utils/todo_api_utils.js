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
  }

}
