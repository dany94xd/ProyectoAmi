import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RolService } from '../services/rol/rol.service';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class AuthRecicladorGuard implements CanActivate {
  constructor(private router: Router, private servicioRol: RolService){

  }
  canActivate(){
    
    let estado = false;
    let currentuUser = JSON.parse (localStorage.getItem('currentuser'));
    let currentoRol: Rol = JSON.parse(localStorage.getItem("currentRol"));
    if(currentuUser){
      if(currentoRol.tipoRol == "reciclador"){
        return true;
      }else{ 
        this.router.navigate(['/login']);
      }
      
      
    }else{
      
      this.router.navigate(['/login']);
      
    }
  }
}
