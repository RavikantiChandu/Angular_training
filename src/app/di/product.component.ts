import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './Product';

@Component({
    selector: 'app-DI',
    providers: [ProductService], // Component level DI
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
    product: Product;
    ps: ProductService;

    // constructor level dependency injection
    constructor(ps: ProductService) {
        console.log("Service is injected")
        this.ps = ps;
     }

    ngOnInit() {
        this.product = this.ps.getProduct();
    }
}
