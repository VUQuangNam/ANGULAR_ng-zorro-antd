import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-default-layout',
    templateUrl: './default-layout.component.html',
    styleUrls: ['./style.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DefaultLayoutComponent {
    isCollapsed: boolean;

    constructor() {
        this.isCollapsed = false;
    }

    receiveisCollapsed($event) {
        this.isCollapsed = $event;
    }
}
