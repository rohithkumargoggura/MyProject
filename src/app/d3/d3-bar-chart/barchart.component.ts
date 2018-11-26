import { Component} from '@angular/core';
@Component({
    selector: 'bar-chart',
    templateUrl: './barchart.component.html',
    styleUrls: ['./barchart.component.scss']
  })

  export class BarChart {

        constructor(){

        }

        public donutChartData = [{
            id: 0,
            label: 'water',
            value: 20,
            color: 'red',
        }, {
            id: 1,
            label: 'land',
            value: 20,
            color: 'blue',
        }, {
            id: 2,
            label: 'sand',
            value: 30,
            color: 'green',
        }, {
            id: 3,
            label: 'grass',
            value: 20,
            color: 'yellow',
        }, {
            id: 4,
            label: 'earth',
            value: 10,
            color: 'pink',
        }];

}