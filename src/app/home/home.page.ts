import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  // Importing ViewChild. We need @ViewChild decorator to get a reference to the local variable 
  // that we have added to the canvas element in the HTML template.

  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  constructor() { }

  // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined. 
  // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
  ngAfterViewInit() {
    this.lineChartMethod();
  }

  

  lineChartMethod() {
    var config: any = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Sell per week',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
            spanGaps: false,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      },
    };
    this.lineChart = new Chart(this.lineCanvas.nativeElement, config);
    Chart.register(...registerables);
  }
}