import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2'

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData:{
        labels: ['Week1','Week2','Week3','Week4'],
        datasets:[
          {
            label:"Tasks",
            data:[
              12,24,9,14
            ]
          }
        ]
      }
    };
  }
  render() {
    return(
      <div className="chart">
        <Bar data={this.state.chartData}/>
      </div>
    );
  }
}

export default AdminDashboard;
