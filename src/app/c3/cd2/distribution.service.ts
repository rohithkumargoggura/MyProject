import { Injectable } from '@angular/core';

// Peer dependencies
import * as d3 from 'd3';
import * as c3 from 'c3';

@Injectable()
export class DistributionOfResponsesService {
    /**
     * Function to create a distrobution bar chart
     * @param {string} chartId - ID of the DOM element we want to place the chart in.
     * @param {Object} barData - Data for each of the bars in the chart
     */
    createDistributionBar(chartId: string, barData: any): Promise<void> {
        return new Promise((resolve, reject) => {
            const baseColumnLabels: string[] = ['Very Poor', 'Poor', 'Fair', 'Good', 'Very Good'];
            const nVals: any = {};
            const barValues: number[] = [];
            barData.forEach(bar => {
                if (bar.responseValue === 1) {
                    nVals.veryPoor = bar.count;
                    barValues[0] = bar.pctTotal.toFixed(2);
                } else if (bar.responseValue === 2) {
                    nVals.poor = bar.count;
                    barValues[1] = bar.pctTotal.toFixed(2);
                } else if (bar.responseValue === 3) {
                    nVals.fair = bar.count;
                    barValues[2] = bar.pctTotal.toFixed(2);
                } else if (bar.responseValue === 4) {
                    nVals.good = bar.count;
                    barValues[3] = bar.pctTotal.toFixed(2);
                } else if (bar.responseValue === 5) {
                    nVals.veryGood = bar.count;
                    barValues[4] = bar.pctTotal.toFixed(2);
                }
            });
            const nLabels: string[] = [
                'n = ' + nVals.veryPoor, 'n = ' + nVals.poor, 'n = ' + nVals.fair, 'n = ' + nVals.good, 'n = ' + nVals.veryGood
            ];
            const colorArray: any[] = [];
            const actualColumnLabels: string[] = [];
            baseColumnLabels.forEach((label, index) => {
                switch (index) {
                    case 0:
                        colorArray.push('#cd7878');
                        actualColumnLabels.push(label + ' ' + nLabels[index]);
                        break;
                    case 1:
                        colorArray.push('#e6a5a6');
                        actualColumnLabels.push(label + ' ' + nLabels[index]);
                        break;
                    case 2:
                        colorArray.push('#e2e2e2');
                        actualColumnLabels.push(label + ' ' + nLabels[index]);
                        break;
                    case 3:
                        colorArray.push('#a4c1d9');
                        actualColumnLabels.push(label + ' ' + nLabels[index]);
                        break;
                    case 4:
                        colorArray.push('#5c8db4');
                        actualColumnLabels.push(label + ' ' + nLabels[index]);
                        break;
                }
            });
            c3.generate({
                interaction: {
                    enabled: false
                },
                bindto: '#' + chartId + ' .chart',
                data: {
                    x: 'x',
                    columns:
                        [
                            ['x', ...actualColumnLabels],
                            ['value', ...barValues]
                        ],
                    type: 'bar',
                    labels: true,
                    color: (color, d) => {
                        return colorArray[d.index];
                    }
                },
                bar: {
                    width: 30
                },
                size: {
                    height: 40 * 5
                },
                legend: {
                    show: false
                },
                axis: {
                    rotated: true,
                    x: {
                        tick: {
                           // height: 100
                        },
                        type: 'category'
                    },
                    y: {
                        show: false
                    }
                },
                onrendered: () => {
                    resolve();
                }
            });
        });
    }

}
