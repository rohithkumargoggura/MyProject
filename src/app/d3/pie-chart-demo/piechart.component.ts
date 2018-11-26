import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pi-chart',
//   styleUrls: ['./piechart.component.scss'],
  templateUrl: './piechart.component.html'
})
export class PiChart {
public pieChartData = [{
    id: 0,
    label: 'slice 1',
    value: 50,
    color: 'blue',
  }, {
    id: 1,
    label: 'slice 2',
    value: 20,
    color: 'black',
  }, {
    id: 2,
    label: 'slice 3',
    value: 30,
    color: 'red',
  }]
}