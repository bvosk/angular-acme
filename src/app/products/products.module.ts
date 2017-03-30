import { SharedModule } from './../shared/shared.module';
import { ProductService } from './product.service';
import { ProductDetailGuard } from './product-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ ProductDetailGuard ]
      },
    ])
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ]
})
export class ProductsModule {}