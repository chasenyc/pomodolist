import React from 'react';

import Header from './layout/header/header';
import CurrentUserStore from '../stores/current_user_store';
import TodoStore from '../stores/todo_store';
import SessionAPIUtils from '../utils/session_api_utils';
import TodoAPIUtils from '../utils/todo_api_utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getStateFromStore();
  }

  getStateFromStore() {
    return {
      user: CurrentUserStore.currentUser(),
      isLoggedIn: CurrentUserStore.isLoggedIn(),
      todos: TodoStore.all(),
      setWidth: this.setWidth.bind(this),
      progress: 0
    };
  }

  setWidth(width) {
    this.setState({
      progress: width
    })
  }

  componentDidMount() {
    this._changeListener = e => this.setState( this.getStateFromStore());
    CurrentUserStore.addChangeListener(this._changeListener);
    TodoStore.addChangeListener(this._changeListener);
    SessionAPIUtils.fetchCurrentUser().then(TodoAPIUtils.fetchTodos());
  }

  componentWillUnmount() {
    CurrentUserStore.removeChangeListener(this._changeListener);
    TodoStore.removeChangeListener(this._changeListener);
  }

  render() {
    var progressStyle = {
      width: this.state.progress + "%"
    }
    return (
      <div>
        <Header {...this.state} />
        <div className="progress-bar-total">
          <div
            style={ progressStyle }
            className="progress-bar-current">
          </div>
        </div>
        {this._children()}
      </div>
    )
  }

  _children() {
    return React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, this.state);
    }, this);
  }
}
