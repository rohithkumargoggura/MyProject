import { Component, OnInit } from '@angular/core';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'multi-bar',
  styleUrls: ['./multibar.component.scss'],
  templateUrl: './multibar.component.html'
})
export class MultiBarChart {

    public colors = ['red', 'green', 'blue']
    public  dataColumns = [1]; // Single Bar Chart
    // public  dataColumns = [3]; // Stacked Bar Chart
    // public  dataColumns = [2, 1]; // Multi Stacked Bar Chart
    public barChartData = [{
        id: 0,
        label: 'label1',
        value1: 10,
        value2: 10,
        value3: 10,
    }, {
        id: 1,
        label: 'label2',
        value1: 10,
        value2: 10,
        value3: 10,
    }]
}