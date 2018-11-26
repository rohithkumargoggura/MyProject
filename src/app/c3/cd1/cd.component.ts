import { Component, ElementRef, ViewChild, Input } from "@angular/core";
import * as c3 from 'c3';
import * as d3 from 'd3';

@Component({
    selector: 'cd',
   styleUrls: ['./cd.component.scss'],
    templateUrl: './cd.component.html'
})

export class CD {
    ngOnInit(){
        var chart = c3.generate({
            bindto: '#chart1',
            data: {
                x : 'x',
                columns: [
                    ['x', 'CardTest', 'CTscan', 'Lab', 'Mammo', 'MRI', 'PT', 'ECG', 'EEG', 'Xray', 'OT', 'IN', 'OP'],
                    ['pv', 90, 99, 140, 200, 98, 400, 90, 97, 140, 200, 96, 400],
                ],
                type: 'bar',
                colors: {
                    'pv': function(d) { return d.value < 100 ? '#BA7E71' : '#2A6DF7' }
                }
            },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        rotate: 0,
                        multiline: false
                    },
                    height: 130
                }
            }
        });  
        
        
        
    }
    

}