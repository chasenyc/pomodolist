import AppActions from '../actions/app_actions';

export default {
  login(userData, cb) {
    $.ajax({
      url: "/api/session",
      type: "POST",
      data: {user: userData},
      success: (user) => {
        AppActions.receiveUser(user);
        cb;
      }
    });
  }
}
