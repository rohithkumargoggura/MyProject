import { Component, ElementRef, ViewChild } from "@angular/core";
import * as c3 from 'c3';
@Component({
    selector: 'pie-chart',
    styleUrls: ['./piechart.component.scss'],
    templateUrl: './pie-chart.html'
})

export class PieChartComponent1 {
    ngOnInit(){
        let chart = c3.generate({
            bindto: '#chart',
    
    
            data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ]
            }
        });
    
    }
}