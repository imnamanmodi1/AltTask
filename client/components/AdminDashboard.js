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
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    };
  }
  render() {
    return(
      <div className="chart">
        <Bar data={this.state.chartData}
          options={{
            title:{
              display:true,
              text: "Task History",
              fontSize:25
            },
            legend:{
              display:true,
              position:"bottom"
            }
          }}
        />
        <Pie data={this.state.chartData}
          options={{
            title:{
              display:true,
              text: "Task History",
              fontSize:25
            },
            legend:{
              display:true,
              position:"bottom"
            }
          }}
        />
      </div>
    );
  }
}

export default AdminDashboard;
