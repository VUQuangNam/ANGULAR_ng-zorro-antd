import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./style.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DefaultSidebarComponent implements OnInit {
    @Input() isCollapsed: boolean;

    constructor() { }

    async ngOnInit() { }
}
