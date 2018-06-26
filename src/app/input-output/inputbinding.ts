import {Component } from '@angular/core';
//StockComponent
@Component({
    selector: 'app-stock',
    template: `
    <div class="text-left">
    <h1 class="bg-info">Stock Exchange</h1>

    <input type="text"  placeholder="Enter stock (e.g: Verizon)"  
      (change)="onInputEvent($event)"/>
    
    <input type="text"  placeholder="Enter quantity (e.g: 100)"  
      [(ngModel)]= "quantity"/>

    <br/>   
    
    <div>Stock Info :{{stock}}</div>

    <order-processor  [stockSymbol]="stock" [quantity]="quantity">
       </order-processor>
</div>

     <timer-comp></timer-comp>
  `
})
//Parent component
export class StockComponent {
    stock: string;
    quantity: number;

    constructor() {
        window.setInterval(() => {
            this.stock="Murthy Infotek @ $"+ 
                      Math.round(100* Math.random())
        }, 500000
    )
    }
    // this is event.target.value in  javascript
    onInputEvent({target}: any): void {
        this.stock = target.value; //verizon
    }
}