import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string;
    errorMessage: string;

    products: IProduct[];

    constructor(private _productService: ProductService) {}

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit() {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error
            );
    }

    onNotify(message: string) {
        console.log('Rating: ' + message);
    }
}