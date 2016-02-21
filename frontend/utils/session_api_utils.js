import AppActions from '../actions/app_actions';

export default {
  login(userData) {
    return $.ajax({
      url: "/api/session",
      type: "POST",
      data: {user: userData},
      success: (user) => {
        AppActions.receiveUser(user);
      }
    });
  }

  logout(userData) {
    return $.ajax({
      url: "/api/session",
      type: "DELETE",
      data: {user: userData},
      success: (user) => {
        AppActions.receiveUser(user);
      }
    });
  }

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
