import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class WelcomeComponent {
    isLoadingOne = false;
    isLoadingTwo = false;
    constructor() { }

    loadOne = () => {
        this.isLoadingOne = true;
        setTimeout(() => {
            this.isLoadingOne = false;
        }, 5000);
    }
}
