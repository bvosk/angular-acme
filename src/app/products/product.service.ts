import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

@Injectable()
export class ProductService {
  private _productUrl = 'api/products/products.json';
  constructor(private _http: Http) {}

  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
      .map((response: Response) => <IProduct[]> response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getProduct(id: number): Observable<IProduct> {
    return this._http.get(this._productUrl)
      .map((response: Response) => {
        return <IProduct[]> response.json()
          .find((product: IProduct) => product.productId === id);
      })
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.toString() || 'Server error');
  }
}
