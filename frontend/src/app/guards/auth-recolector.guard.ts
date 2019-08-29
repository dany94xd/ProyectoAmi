import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RolService } from '../services/rol/rol.service';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class AuthRecolectorGuard implements CanActivate {

  constructor(public router: Router, private servicioRol: RolService){}
  canActivate(){
    let currentuUser = JSON.parse (localStorage.getItem('currentuser'));
    let currenRol: Rol = JSON.parse (localStorage.getItem('currentRol'));
    if(currentuUser){

      if(currenRol.tipoRol == "recolector"){
        return true;
      }else{
        this.router.navigate(['/login']);
      }

    }else{
      this.router.navigate(['/login']);
    
    }
  }
}
