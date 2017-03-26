import { Component } from '@angular/core';

import { IProduct } from './product';

@Component({
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent {
  pageTile: string = 'Product Detail';
  product: IProduct;
}
