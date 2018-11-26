import { Component, ElementRef, ViewChild } from "@angular/core";
import * as c3 from 'c3';
import * as d3 from 'd3';
import {UserStories} from "../../services/userstories.service";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'

@Component({
    selector: 'bars123',
    // styleUrls: ['./bars.component.scss'],
    templateUrl: './bar3.component.html'
})
export class Bar3 {
    ngOnInit(){
        // var chart = c3.generate({
        //     data: {
        //         x: 'x',
        //         columns: [
        //             ['x','CardTest','CTscan','Lab','Mammo','MRI','PT'],
        //             ['data1', 30, 200, 100, 400, 150, 250],
        //         ],
        //         types: {
        //             data1: 'bar',
        //         }
        //     },
        //     axis: {
        //         rotated: true
        //     }
        // });
        var chart = c3.generate({
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
        
        

}}