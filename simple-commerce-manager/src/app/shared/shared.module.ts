import { NgModule } from '@angular/core';
import { IdGenService } from "./id-gen.service";
import { CheckedProdDataService } from "../product/product-management/checked-prod-data.service";


@NgModule({
  providers: [
    IdGenService,
    CheckedProdDataService,
  ]
})
export class SharedModule { }
