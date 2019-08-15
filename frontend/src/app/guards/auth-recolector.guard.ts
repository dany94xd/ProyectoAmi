import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRecolectorGuard implements CanActivate {

  constructor(public router: Router){}
  canActivate(){
    let currentuUser = JSON.parse (localStorage.getItem('currentuser'));
    if(currentuUser){
      if(currentuUser.idRol == "02"){
        return true;
      }else{
        this.router.navigate(['/login']);
      }
      
    }else{
      this.router.navigate(['/login']);
    }
  }
}
