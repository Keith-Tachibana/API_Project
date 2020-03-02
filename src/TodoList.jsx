import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const {todos} = this.props;
    const renderTodos = () => {
      return todos.map(todo => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
        )
      })
    };
    return (
      <React.Fragment>
        <div>
          {renderTodos()}
        </div>
      </React.Fragment>
    )
  }
}

export default TodoList;
