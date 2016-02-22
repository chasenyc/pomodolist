import AppConstants from '../constants/app_constants'
import { dispatch, register } from '../dispatcher/app_dispatcher'

export default {
  receiveUser(user){
    dispatch({
      actionType: AppConstants.RECEIVE_USER, user
    })
  },

  receiveTodos(todos){
    dispatch({
      actionType: AppConstants.RECEIVE_TODOS, todos
    })
  },

  receiveTodo(todo){
    dispatch({
      actionType: AppConstants.RECEIVE_TODO, todo
    })
  }
}
