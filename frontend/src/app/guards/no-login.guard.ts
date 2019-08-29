import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RolService } from '../services/rol/rol.service';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {
  constructor (private router: Router, private rolService: RolService){

  }
  canActivate(){
    let currentuUser = JSON.parse (localStorage.getItem('currentuser'));
    if(!currentuUser){
      
        return true;
      
    }else{
      //console.log("hola mundo");
      
      this.rolService.getRolById(currentuUser.idRol).subscribe(res =>{
        
        let rolTmp = res as Rol;
        if(rolTmp.tipoRol == "admin"){
          console.log("hola mundo")
          this.router.navigate(['/admin/personas']);
        }else if(rolTmp.tipoRol == "recolector"){
          this.router.navigate(['/user/ingresomatricula']);
        }else if(rolTmp.tipoRol == "reciclador"){
          this.router.navigate(['/perfilreciclador']);
        }
      })

      
    }
  }
}
