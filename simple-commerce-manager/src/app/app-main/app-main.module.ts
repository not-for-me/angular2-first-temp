import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { MainDashboardComponent } from "./main-dashboard/main-dashboard.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainDashboardComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainDashboardComponent,
    PageNotFoundComponent
  ]
})
export class AppMainModule { }
