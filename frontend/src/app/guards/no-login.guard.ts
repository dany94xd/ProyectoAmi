import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {
  constructor (private router: Router){

  }
  canActivate(){
    let currentuUser = JSON.parse (localStorage.getItem('currentuser'));
    if(!currentuUser){
      
        return true;
      
    }else{
      console.log("hola mundo");
      if(currentuUser.idRol == "01"){
        console.log("hola mundo")
        this.router.navigate(['/admin/personas']);
      }else if(currentuUser.idRol == "02"){
        this.router.navigate(['/user/ingresomatricular']);
      }else if(currentuUser.idRol == "03"){
        this.router.navigate(['/perfilreciclador']);
      }
      
    }
  }
}
