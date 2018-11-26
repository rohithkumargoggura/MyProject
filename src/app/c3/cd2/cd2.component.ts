import { Component, ElementRef, ViewChild, Input } from "@angular/core";
import * as c3 from 'c3';
import * as d3 from 'd3';

import {CommentDistributionService} from "./comment.service";
import {DistributionOfResponsesService} from "./distribution.service";
import {DashboardBase} from "../classes/dashboard-base";
@Component({
    selector: 'cd12',
    styleUrls: ['./cd2.component.scss'],
    templateUrl: './cd2.component.html'
})

export class CDE extends DashboardBase  {
    distributionResponses;
    distributionComments;
    public infoTooltips: any = {};
    constructor(
        public distributionOfResponsesService: DistributionOfResponsesService,
        public commentDistributionService: CommentDistributionService,
      ){super();}
      ngOnInit() {
       // console.log(this.facilityScorecardData);
        // Double check for DOM to have finished initializing as D3 was getting fussy every so often
        setTimeout(() => {
          this.initializeDashboardCharts().then(() => { this.dashboardRendered.emit() });
          this.initializeTooltipText();
          console.log("entered");
        }, 0);
      }
    initializeDashboardCharts(): Promise<void> {
        return new Promise((resolve, reject) => {
            
          Promise.all([
           
            this.distributionOfResponsesService.createDistributionBar('responses-bar', this.distributionResponses),
            this.commentDistributionService.createDistributionDonut('comment-donut', this.distributionComments),
           
          ])
            .then(() => resolve())
            .catch(err => { console.error(err); })
        });
      }
//     ngOnInit(){
// var chart = c3.generate({
//     bindto: '#chart2',
//     data: {
//         columns: [
//             [30],
//             [120],
//         ],
//         type : 'donut',
//     },
//     donut: {
//         title: "PressGaney"
//     }
// });

// setTimeout(function () {
//     chart.load({
//         columns: [
//             ["Defined", 0.2],
//             ["InProgress", 1.3],
//             ["Completed", 2.5],
//             ["Accepted", 3.5],
//         ]
//     });
// }, 1500);
// }
initializeTooltipText() {
    this.infoTooltips.distributionResponses = [
      'The Distribution of Responses chart shows the number and percent of responses in each category for the survey item selected.'
    ];
    this.infoTooltips.distributionComments = [
      'The Comment Distribution section shows you the percentage of comments in each category: positive, mixed, negative, ' +
      'and neutral for the service and time frame selected.'
    ];
    
  }

  /**
   * Function to add class to DOM element with tooltip inside when an event specified
   * inside of the template occurs.
   * @param event - DOM event that triggered this function from the template.
   */
  showToolTip(event: any) {
    event.target.classList.add('show-tooltip');
  }

  /**
   * Function to remove class from DOM element with tooltip inside when an event specified
   * inside of the template occurs.
   * @param event - DOM event that triggered this function from the template.
   */
  dismissToolTip(event: any) {
    event.target.classList.remove('show-tooltip');
  }



}