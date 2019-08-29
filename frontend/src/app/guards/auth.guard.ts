import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';
import { e } from '@angular/core/src/render3';
import { RolService } from '../services/rol/rol.service';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginService, private router: Router, private rolService: RolService){

  }
  canActivate(){
    let currentuUser = JSON.parse (localStorage.getItem('currentuser'));
    let currentRol: Rol = JSON.parse (localStorage.getItem('currentRol'));
    if(currentuUser){

      if(currentRol.tipoRol == "admin"){
        return true;
      }else{
        this.router.navigate(['/login']);
      }

      
    }else{
      this.router.navigate(['/login']);
     
    }
  }
}
