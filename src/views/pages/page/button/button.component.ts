import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './button.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
    isLoadingOne = false;
    isLoadingTwo = false;
    mode = false;
    dark = false;
    constructor() { }
    loadOne = () => {
        this.isLoadingOne = true;
        setTimeout(() => {
            this.isLoadingOne = false;
        }, 5000);
    }
}
