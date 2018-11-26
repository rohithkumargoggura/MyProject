import { Injectable } from '@angular/core';

// Peer dependencies
import * as d3 from 'd3';
import * as c3 from 'c3';

@Injectable()
export class CommentDistributionService {
    /**
     * Function to create a distrobution donut chart
     * @param {string} chartId - ID of the DOM element we want to place the chart in.
     * @param {Object} donutData - Data to fuel the doughnut chart sections
     */
    createDistributionDonut(chartId: string, donutData: any): Promise<void> {
        return new Promise((resolve, reject) => {
            const donutColumns: any[] = [];
            donutData.forEach(donut => {
                donutColumns.push([donut.commentType, donut.pctTotal.toFixed(2)]);
            });
            c3.generate({
                interaction: {
                    enabled: false
                },
                bindto: '#' + chartId + ' .chart',
                data: {
                    columns: donutColumns,
                    type: 'donut',
                    colors: {
                        'Positive': '#5c8db4',
                        'Negative': '#cd7878',
                        'Mixed': '#95a4c8',
                        'Neutral': '#e2e2e2',
                        'Open': '#848484'
                    },
                    order: null
                },
                donut: {
                    width: 80,
                    label: {
                        threshold: 0.001
                    }
                },
                size: {
                    height: 300
                },
                legend: {
                    position: 'right'
                },
                onrendered: () => {
                    d3.selectAll('#' + chartId + ' .chart .c3-chart-arc text').each(function (v) {
                        const label = d3.select(this);
                        const pos = label.attr('transform').match(/-?\d+(\.\d+)?/g);
                        // pos[0] is x, pos[1] is y. Do some position changes and update value
                      //  label.attr('transform', 'translate(' + pos[0] * 1.2 + ',' + pos[1] * 1.2 + ')').style('fill', 'black');
                    });
                    d3.selectAll('#' + chartId + ' .chart .c3-chart-arc .c3-arcs').style('transform', 'scale(0.8)');
                    resolve();
                }
            });
        });
    }

}
