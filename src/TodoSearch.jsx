import React, { Component } from 'react';

class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <React.Fragment>
        <div className="mt-4">
          <form className="form-inline justify-content-center my-2 my-lg-0">
            <div className="input-group">
              <div className="input-group-prepend">
                <i className="input-group-text bg-warning fas fa-search pt-2"></i>
              </div>
              <input type="search" ref="searchText" className="form-control mr-sm-2" placeholder="Search todos" onChange={this.handleSearch} size="50" />
            </div>
          </form>
          <div className="mt-4 mb-4">
            <label htmlFor="show-completed" className="text-warning h3">
              <input type="checkbox" id="show-completed" className="mr-2" ref="showCompleted" onChange={this.handleSearch} />
              Show completed todos
            </label>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default TodoSearch;
