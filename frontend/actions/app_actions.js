import AppConstants from '../constants/app_constants'
import { dispatch, register } from '../dispatcher/app_dispatcher'

export default {
  receiveUser(user){
    dispatch({
      actionType: AppConstants.RECEIVE_USER, user
    })
  }
}
