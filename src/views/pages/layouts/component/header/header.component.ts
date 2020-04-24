import { Component, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./style.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DefaultHeaderComponent implements OnInit {
    isCollapsed: boolean;

    @Output() messageEvent = new EventEmitter<boolean>();

    constructor() { }

    async ngOnInit() {
        this.isCollapsed = false;
    }

    onSendCollapsed = () => {
        this.isCollapsed = !this.isCollapsed;
        this.messageEvent.emit(this.isCollapsed);
    }
}
