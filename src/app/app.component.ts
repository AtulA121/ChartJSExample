import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Charts';
  LineChart;
  PieChart;
  BarChart;
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
