import AppActions from '../actions/app_actions';

export default {
  createUser(userData) {
    return $.ajax({
      url: "/api/users",
      type: "POST",
      data: {user: userData},
      success: (user) => {
        AppActions.receiveUser(user);
      }
    });
  }
}
