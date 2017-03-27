import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) {}

  ngOnInit(): void {
    const id = +this._route.snapshot.params['id'];
    this._productService.getProduct(id)
      .subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error
      );
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
