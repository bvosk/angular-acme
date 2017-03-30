import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent
  ]
})
export class SharedModule {}