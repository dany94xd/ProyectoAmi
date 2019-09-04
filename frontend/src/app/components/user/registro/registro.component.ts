import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { PersonasService } from 'src/app/services/personas/personas.service';
import { Usuario } from 'src/app/models/usuario';
import { Persona } from 'src/app/models/persona';
import { LoginService } from 'src/app/services/login/login.service';
import { RolService } from 'src/app/services/rol/rol.service';
import { Rol } from 'src/app/models/rol';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private servicioUsuario: UsuarioService, private servicioPersona: PersonasService, private auth: LoginService, private rolService: RolService, private rourter: Router) { }
  public name: string;
  public lastName: string;
  public email: string = "";
  public matricula: string;
  public cedula: string = "";
  public password: string = "";
  public user: string = "";

  ngOnInit() {


  }


  registrarUsuario(){
    console.log("Hola mundo", this.cedula);

    if(this.user != "" && this.email != "" && this.password != ""  && this.cedula != "" ){

    this.servicioPersona.getPersonaByCedula(this.cedula).subscribe(personaPorCedula => {
      //console.log(personaPorCedula[0])
      
      if(personaPorCedula[0] != undefined){


          let personaTmp = personaPorCedula[0] as Persona;
        //console.log(personaTmp);

          let usuario: Usuario = {
          idPersona: personaTmp._id,
          idLogros: "01",
          idRol: "5d54c7c159054a1213004046",
          idInstitucion: "01",
          matricula: personaTmp.matricula,
          NroBotellas: 0,
          saldoActual: 0,
          saldoVerde: 0,
          user: this.user,
          password: this.password,
          email: this.email
          }
          console.log(usuario);

          this.servicioUsuario.postUsuario(usuario).subscribe(res => {
            console.log(res)
            
            if(res){
              console.log("creado con extio", usuario.user , usuario.password)
              this.auth.login(usuario.user, usuario.password).subscribe(res => {
                //debugger
                if(res){
                  this.rolService.getRolById(usuario.idRol).subscribe(resRol => {
                    //debugger
                    let rol = resRol as Rol
                    localStorage.setItem("currentuser", JSON.stringify(usuario));
                    localStorage.setItem("currentRol", JSON.stringify(resRol));
                    if(rol.tipoRol == "reciclador"){
                      this.rourter.navigate(['perfilreciclador']);
                    }
                  })
                }
              })
            }

          });
         
        
          



        

      }else{
        alert("Debe ingresar una cedula registrada")
      }
    
      
    }, (err) => {
      console.log(err)
    })
  }else{
    alert("Debe llenar todos los campos")
  }

  }

}
