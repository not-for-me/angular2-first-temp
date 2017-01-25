import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./app-main/page-not-found/page-not-found.component";
import { MainDashboardComponent } from "./app-main/main-dashboard/main-dashboard.component";
import { CategoryManagementComponent } from "./category/category-management/category-management.component";

const routes: Routes = [
  {path: 'total-summary', component: MainDashboardComponent},
  {path: 'category-list', component: CategoryManagementComponent},
  {path: '', redirectTo: '/total-summary', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
