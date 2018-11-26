import { Input, Output, EventEmitter } from '@angular/core';

export abstract class DashboardBase {
    @Input()
    public serverSide: boolean;

    @Output()
    dashboardRendered: EventEmitter<void> = new EventEmitter();

    constructor() { }
}