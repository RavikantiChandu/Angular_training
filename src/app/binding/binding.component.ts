import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html'
})
export class BindingComponent {
    title:string = 'Working with Binding';
    clicked:boolean = false;

    public items: any = [
        {name: 'Kendo UI'},
        {name: 'Ext JS'},
        {name: 'Angular JS'},
        {name: 'Ember JS'},
    ];

    public clickedItem: any = {name: ''};  // property

    // EventHandler / Method
    onItemClicked(item: any) {
        this.clickedItem = item;
        this.clicked = true;
    }
}
