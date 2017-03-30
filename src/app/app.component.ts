import { ProductService } from './products/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'pm-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  pageTitle: string = `Acme Product Management`;
}
