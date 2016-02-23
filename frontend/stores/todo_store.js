import { dispatch, register } from '../dispatcher/app_dispatcher';
import AppConstants from '../constants/app_constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _todos = [];

const TodoStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb)
  },

  all() {
    return _todos.slice(0);
  },

  addTodo(newTodo) {
    var found = false;
    _todos.forEach((todo) => {
      if (todo.id === newTodo.id) {
        _todos[_todos.indexOf(todo)] = newTodo;
        found = true;
      }
    });
    if (!found) {
      _todos.unshift(newTodo);
    }
  },

  dispatcherIndex: register( function (action) {
    switch(action.actionType){
      case AppConstants.RECEIVE_TODOS:
        _todos = action.todos;
        break;
      case AppConstants.RECEIVE_TODO:
        TodoStore.addTodo(action.todo);
        break;
    }
    TodoStore.emitChange();
  })

})

export default TodoStore;
