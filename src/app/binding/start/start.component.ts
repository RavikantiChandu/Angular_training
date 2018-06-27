import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css'],
    styles: [`
    h3{
        text-decoration:underline;
    }
    `],
    encapsulation: ViewEncapsulation.Emulated
    /* Emulated - Global styles + Native style
       Native - Only to the current coponent
       None - style pushed to Head section, entire DOM will get this style

    */
})
export class StartComponent {
    time: any;
    name: string = 'Sridhar';
    buttonStatus: boolean = false;
    titleStyle: string = 'red';

    constructor() {
        window.setInterval(() => {
            this.time = new Date().toString();
        }, 1000);
     }

    // methods - Event handlers

    Save(event: any) {
        alert('Ok.. Your points are redeemed');
        this.buttonStatus = true;
    }
}
