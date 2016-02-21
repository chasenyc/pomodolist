import { dispatch, register } from '../dispatcher/app_dispatcher';
import AppConstants from '../constants/app_constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _currentUser = {};

const CurrentUserStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb)
  },

  currentUser() {
    return $.extend({}, _currentUser);
  },

  isLoggedIn() {
    return (typeof _currentUser.id !== "undefined");
  },

  _setUser(user) {
    _currentUser = user;
  },

  dispatcherIndex: register( function (action) {
    switch(action.actionType){
      case AppConstants.RECEIVE_USER:
        _currentUser = action.user;
        console.log(_currentUser);
        break;
    }
    CurrentUserStore.emitChange();
  })

})

export default CurrentUserStore;
