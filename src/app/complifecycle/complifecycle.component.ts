import { Component, Input, OnInit, OnChanges, DoCheck, OnDestroy, ChangeDetectorRef } from '@angular/core';

// parent component
@Component({
    selector: 'app-lifecycle',
    template: `
     <h1 class = "container"> Google Search:
       <input type="text" [(ngModel)] = "search">
     </h1>

     <child [search] = "search"> </child>
    `
})
export class CompLifeCycleComponent implements OnInit {

    search: string = "computers";

    ngOnInit() {
        console.log("Parent Component Initialized")
    }
}

// child component
@Component({
    selector: 'child',
    template: `
     <h1 class = 'text-danger container'> Search Text </h1>
     <div class= 'container'>
       <h3 class='text-primary'> {{search}} </h3>
     </div>
    `
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

    changed: boolean = false;
    @Input()
    search: string;

    /** search isn't initialized yet */
    constructor(public cd: ChangeDetectorRef) {
        // inject service here
        console.log(`constructor: ${this.search}`);
        this.cd.detach();
     }

    ngOnInit() {
        // invoke service method for initial data, load data from local store
        console.log(`ngOnInit: ${this.search}`);
        //debugger;

        // raise custom events
        /*
        setTimeout(() => {
            this.cd.reattach()
        }, 5000);
        */
    }

    /* Invoked everytime an @Input() property changes via the data binding*/
    // used for Validations
    ngOnChanges() {
        console.log(`ngOnChanges: ${this.search}`);
    }

    ngDoCheck() {
        // Write custom change detection strategy logic here
        console.log("ngDoCheck - Change detection strategy");

        /*
        if(this.search.length > 3) {
            this.cd.detectChanges(); // invoked to force update the component tree
        }
        */
       //attaches and then detaches
       //this.cd.detectChanges();

       this.cd.checkNoChanges(); // safe guard changes
    }

    ngOnDestroy() {
        console.log("Component Destroyed");
    }
}
