import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="mt-4 mb-4">
          <form className="form-inline justify-content-center my-2 my-lg-0" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <i className="input-group-text bg-warning fas fa-tasks pt-2"></i>
              </div>
              <input type="text" className="form-control mr-sm-2" ref="todoText" placeholder="What do you need to do?" size="50" />
              <button className="btn btn-outline-warning my-2 my-sm-0">Add Todo</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default AddTodo;
