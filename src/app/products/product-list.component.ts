import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string;
    products: IProduct[];

    constructor(private _productService: ProductService) {}

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit() {
        this.products = this._productService.getProducts();
    }

    onNotify(message: string) {
        console.log('Rating: ' + message);
    }
}