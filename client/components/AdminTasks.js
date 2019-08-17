import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../actions/tasks";


class AdminTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount = () => {
    this.props.dispatch(getTasks())
    // this.setState({tasks: this.props.tasks.task})
    this.forceUpdate()
  };

  render() {
    const task = this.props.tasks.task
    console.log(task, "task")
    return (
      <>
        <div className="container">
          {task && task.length !== 0 ? task.map((task, i) => (
          <div key={i} className="columns is-multiline is-variable is-2 tasks-container">
            <div className="column is-one-quarter-desktop is-half-tablet">
              <div className="card">
                <header className="card-header">{task.deadline.slice(0, 10)}</header>
                <div className="card-content content">
                  <h2 className="card-title">{task.title}</h2>
                  <p className="card-text">{task.content}</p>
                </div>
                <footer className="card-footer">
                  <a href="User profile">User profile</a>
                </footer>
              </div>
            </div>
          </div>
          )):(
            "" )} 
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer
  };
};
export default connect(mapStateToProps)(AdminTasks);
