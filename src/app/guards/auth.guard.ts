import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  constructor(private router: Router, private authService: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    /*console.log('VERIFY');
    console.log(localStorage.getItem('token'));

    if (localStorage.getItem('token')) {
        return true;
    } else {
        this.router.navigate(['/login']);
    }*/
    if (this.authService.isLoggedIn()) {
      console.log('logado');
      return true;
    } else {
      console.log('nao logado');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
