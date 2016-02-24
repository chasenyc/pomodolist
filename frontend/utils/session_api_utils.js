import AppActions from '../actions/app_actions';
import TodoAPIUtils from './todo_api_utils';

export default {
  login(userData) {
    return $.ajax({
      url: "/api/session",
      type: "POST",
      data: {user: userData},
      success: (user) => {
        AppActions.receiveUser(user);
        TodoAPIUtils.fetchTodos();
      }
    });
  },

  logout(userData) {
    return $.ajax({
      url: "/api/session",
      type: "DELETE",
      data: {user: userData},
      success: (user) => {
        AppActions.receiveUser(user);
      }
    });
  },

  fetchCurrentUser() {
    return $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: (user) => {
        AppActions.receiveUser(user);
      }
    });
  }

}
