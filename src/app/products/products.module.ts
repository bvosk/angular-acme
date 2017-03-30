import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductDetailGuard } from './product-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
 
import { StarComponent } from './../shared/star.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    StarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
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