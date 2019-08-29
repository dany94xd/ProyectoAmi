import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRecicladorGuard implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(){
    let currentuUser = JSON.parse (localStorage.getItem('currentuser'));
    if(currentuUser){
      if(currentuUser.idRol == "03"){
        return true;
      }else{
        this.router.navigate(['/login']);
      }
      
    }else{
      this.router.navigate(['/login']);
    }
  }
}
