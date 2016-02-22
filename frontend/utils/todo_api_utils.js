import AppActions from '../actions/app_actions';

export default {
  fetchTodos() {
    return $.ajax({
      url: "api/todos",
      type: 'GET',
      dataType: 'json',
      success: (todos) => { AppActions.receiveTodos(todos) }
    });
  }
}
