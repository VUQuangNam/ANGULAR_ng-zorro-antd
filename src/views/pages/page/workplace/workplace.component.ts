import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-workplace',
    templateUrl: './workplace.component.html',
    styleUrls: ['./style.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class WorkplaceComponent {
    array = [1, 2, 3, 4];
    effect = 'scrollx';
    constructor() { }
}
