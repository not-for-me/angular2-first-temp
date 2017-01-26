import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryManagementComponent } from "./category-management/category-management.component";
import { CategoryAuthGuard } from "./category-auth-guard.service";
import { CategoryListComponent } from "./category-management/category-list/category-list.component";
import { CategoryDetailComponent } from "./category-management/category-detail/category-detail.component";


const routes: Routes = [
  {
    path: '', component: CategoryManagementComponent,
    // path: 'category-list', canActivate: [CategoryAuthGuard], canActivateChild:[CategoryAuthGuard], component: CategoryManagementComponent,
    children: [
      {path: 'category/:id', component: CategoryDetailComponent},
      {path: '', pathMatch: 'full', component: CategoryListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CategoryAuthGuard]
})
export class CategoryRoutingModule {
}
