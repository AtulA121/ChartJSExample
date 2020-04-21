import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Charts';
  LineChart : any;
  PieChart : any;
  BarChart : any;
  LineCharts : any;
  lineChartDataSet : any;
  lineOptions : any;

  constructor(){
    const totalRecs = {
      label: "Total Recs",
      fill: "false",
      lineTension: "0",
      borderColor: "#FF0000",
      borderWidth: 1,
      data: [0, 60, 68, 52, 50, 51]
    };
    const fillRate = {
      label: "Fill Rate",
      fill: "false",
      yAxisID: "percent",
      lineTension: "0",
      borderColor: "#8FAADC",
      borderWidth: 1,
      data: [29, 25, 24, 33, 20, 10]
    };
    const fillRate2 = {
      label: "Fill Rate2",
      fill: false,
      type: "bar",
      yAxisID: "percent",
      lineTension: "0",
      borderColor: "#000",
      backgroundColor: "#00b0f0",
      borderWidth: 1,
      data: [20, 10, 4, 1, 15, 5]
    };
    const AvgFillRate = {
      label: "Avg Fill Rate in Days",
      fill: "false",
      lineTension: "0",
      borderColor: "#5B9BD5",
      borderWidth: 1,
      data: [10, 8, 5, 7, 11, 6]
    };
    const AvgFillRate2 = {
      label: 'Number of Items Sold in Months',
      data: [29, 7, 23, 15, 20, 10],
      yAxisID: "percent",
      fill: true,
      backgroundColor : "#e3f2f2",
      lineTension: 0.3,
      borderColor: "#000",
      borderWidth: 1
    }
    this.lineChartDataSet = {
      labels: ["Jan", "Feb", "March", "April", "May", "June"],
      datasets: [totalRecs, AvgFillRate, fillRate,AvgFillRate2,fillRate2]
    };
    this.lineOptions = {
      legend: {
        position: "top",
        labels: {
          // fontFamily: "Comic Sans MS",
          boxWidth: 30,
          boxHeight: 0,
          fontSize: 10
        },
        maxSize: {
          height: 0
        }
      },
      title: {
        text: "Aggregate Recruiter Performance",
        display: true
      },
      scales: {
        ticks: {
          beginAtZero: true
        },
        xAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              display: false
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              display: false
            }
          },
          {
            id: "percent",
            type: "linear",
            position: "right",

            ticks: {
              max: 35,
              min: 0,
              callback: function(value, index, values) {
                return value + "%";
              }
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            }
          }
        ]
      },
      elements: {
        line: {
          tension: 0
        },
        point: {
          radius: 0
        }
      },
      bezierCurve: false
    };
  }

  ngOnInit() {
    // Line chart:
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'Number of Items Sold in Months',
          data: [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],
          fill: true,
          lineTension: 0.2,
          borderColor: "red",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Line Chart",
          display: false
        },
        onClick : this.handleLineChartClick,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // Bar chart:
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [9, 7, 3, 5, 2, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: true
        },
        onClick : this.handleBarChartClick,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // pie chart:
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [9, 7, 3, 5, 2, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive : true,
        title: {
          text: "Bar Chart",
          display: true
        },
        onClick : this.handlePieChartClick,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    this.LineCharts = new Chart("lineCharts", {
      type: "line",
      data: this.lineChartDataSet,
      options: this.lineOptions
    });

  }

  handlePieChartClick(e) {
    let obj : any=this;
    obj.data.datasets[0].backgroundColor[0]="rgba(255, 255, 255, 0.2)";
    obj.chart.update();
    console.log(this," : ",e);
  }

  handleBarChartClick(){
    let obj : any=this;
    obj.data.datasets[0].backgroundColor[0]="rgba(255, 255, 255, 0.2)";
    obj.chart.update();
    console.log(this);
  }

  handleLineChartClick(){
    let obj : any=this;
    obj.data.datasets[0].borderColor= obj.data.datasets[0].borderColor === "black" ? "red" : "black";
    obj.chart.update();
    console.log(this);
  }
}
