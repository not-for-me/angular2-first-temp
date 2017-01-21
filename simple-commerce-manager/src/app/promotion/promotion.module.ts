import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionManagementComponent } from './promotion-management/promotion-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PromotionManagementComponent],
  declarations: [PromotionManagementComponent]
})
export class PromotionModule { }
