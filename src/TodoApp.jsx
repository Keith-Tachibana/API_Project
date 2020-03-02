import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import TodoAPI from './api/TodoAPI';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuidv4(),
          text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  }

  handleToggle (id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  handleSearch (showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    const {todos, showCompleted, searchText} = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <React.Fragment>
        <h1 className="text-white">Todo List</h1>
        <AddTodo onAddTodo={this.handleAddTodo} />
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
      </React.Fragment>
    )
  }
}

export default TodoApp;
