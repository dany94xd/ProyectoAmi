import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';
import { e } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginService, private router: Router){

  }
  canActivate(){
    let currentuUser = JSON.parse (localStorage.getItem('currentuser'));
    if(currentuUser){
      if(currentuUser.idRol == "01"){
        return true;
      }else {
        this.router.navigate(['/login']);
      }
      
    }else{
      this.router.navigate(['/login']);
    }
  }
}
