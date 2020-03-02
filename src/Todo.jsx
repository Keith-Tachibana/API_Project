import React, { Component } from 'react';
import moment from 'moment';

class Todo extends Component {
  render() {
    const {id, text, completed, createdAt, completedAt} = this.props;
    const renderDate = () => {
      let message = 'Created: ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed: ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm:ss A');
    };

    let cssClass = completed ? 'completed' : 'not-completed';

    return (
      <React.Fragment>
        <div className="text-white" onClick={() => {
          this.props.onToggle(id);
        }}>
          <input type="checkbox" className="mr-2" defaultChecked={completed} />
          <span className={`${cssClass} font-italic h5`}>{text} ({renderDate()})</span>
        </div>
      </React.Fragment>
    )
  }
}

export default Todo;
