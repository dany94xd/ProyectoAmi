import { Component, OnInit } from '@angular/core';
//import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from 'util';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { LoginService } from 'src/app/services/login/login.service';
import { RolService } from 'src/app/services/rol/rol.service';
import { Rol } from 'src/app/models/rol';

export interface Login{
  NroBotellas: number,
  email: string,
  idInstitucion: string,
  idLogros: string,
  idPersona: string,
  user: string;
  idRol: string;
  accesToken: string;
  expiresIn: number,
  saldoActual: number
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  constructor(private authService: LoginService, private router: Router, private location: Location, public rolService: RolService) { }
  // private user: UserInterface = {
  //   email: '',
  //   password: ''
  // };
  // public isError = false;

  ngOnInit() { 
    

   let option 
  }

  login(correo: string, clave: string){
    this.authService.login(correo, clave).subscribe((res:any) => {
      
      if(res){
        //console.log(res)
        let usuarioLoggeado = res.dataUser as Login;
        //console.log(usuarioLoggeado.idRol);
        this.rolService.getRolById("5d41dd216364707db63e7032").subscribe((res: any) => {
          let rolTmp = res as Rol;
          //console.log(rolTmp.tipoRol);
          if(rolTmp.tipoRol == 'admin'){

            localStorage.setItem("currentuser", JSON.stringify(res))
            console.log('vaya a la administracion mi perro');
            console.log(localStorage.getItem("currentuser"));

          }
        });
      }
    })
  }
}
//   onLogin(form: NgForm) {
//     if (form.valid) {
      

//         // return this.authService
//         // .loginuser(this.user.email, this.user.password)
//         // .subscribe(
//         // data => {
//         //   this.authService.setUser(data.user);
//         //   const token = data.id;
//         //   this.authService.setToken(token);
//         //   this.router.navigate(['/user/profile']);
//         //   location.reload();
//         //   this.isError = false;
//         // },
//         // error => this.onIsError()
//         // );

      
      
//   //   } else {
//   //     this.onIsError();
//   //   }
//   // }

//   // onIsError(): void {
//   //   this.isError = true;
//   //   setTimeout(() => {
//   //     this.isError = false;
//   //   }, 4000);
//   // }


// }
