import { Injectable }     from '@angular/core';
import {
  CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild,
  CanDeactivate
}    from '@angular/router';
import { CategoryManagementComponent } from "./category-management/category-management.component";

@Injectable()
export class CategoryAuthGuard implements CanActivate, CanActivateChild, CanDeactivate<CategoryManagementComponent> {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('canActivate');

    // 인증 혹은 인가에 성공하면 true 반환
    return true;

    // 인증 실패할 경우 Router로 화면 전환
    // this.router.navigate(['total-summary']);
    // return false;
  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('canActivateChild');

    return true;
  }

  canDeactivate(component: CategoryManagementComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return confirm('정말 나갈거야?');
  }
}
