import React from "react";
import { Link } from "react-router-dom";
import AllTasks from "./AllTasks";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <h1>Assign Tasks to see their progress</h1>
        <AllTasks />
      </>
    );
  }
}

export default Dashboard;
