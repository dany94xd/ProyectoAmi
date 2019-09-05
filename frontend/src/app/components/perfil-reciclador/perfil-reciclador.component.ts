import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas/personas.service';
import {PersonaComponent} from 'src/app/components/persona/persona.component';
import { Persona } from '../../models/persona';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
@Component({
  selector: 'app-perfil-reciclador',
  templateUrl: './perfil-reciclador.component.html',
  styleUrls: ['./perfil-reciclador.component.css']
})



export class PerfilRecicladorComponent implements OnInit {
  public usuarioEnSesion: any
  public personaEnSesion: any
public datoPorid: any
  public displayNroBotellas: number
  public displaySaldoActual: number
  public displaysaldoVerde: number
  public displaysaldoTotal: number
  public usuarioById: Usuario;
  public rango: string;
  public ratio:any;
  constructor(public personaService: PersonasService, private serviciousuario: UsuarioService, private personaServicio: PersonasService, private router: Router) { }

  ngOnInit() {
    this.personaEnSesion = JSON.parse(localStorage.getItem("currentuser"));
    console.log(this.personaEnSesion.idPersona);
    this.datoPorid = JSON.parse(localStorage.getItem("estudainteMatricula"))
    console.log("=====>>>", this.datoPorid);
    this.personaService.getPersonaById(this.personaEnSesion.idPersona).subscribe(res =>{
      this.usuarioEnSesion = res;
      this.serviciousuario.getUsuarioById(this.datoPorid._id).subscribe(res => {
        this.usuarioById = res as Usuario;

        this.displayNroBotellas = this.usuarioById.NroBotellas;
        this.displaySaldoActual = this.usuarioById.saldoActual;
        this.displaysaldoVerde= this.usuarioById.saldoVerde;
        this.displaysaldoTotal= this.usuarioById.saldoActual+ this.usuarioById.saldoVerde;
       this.ratio=(this.displayNroBotellas/200)*100;
       this.ratio=this.ratio.toFixed(2);
       
       document.getElementById("progres-main").style.width=this.ratio+"%";

        if(this.displayNroBotellas<=50){
       
          this.rango= "Eco - aprendiz";
          console.log("aqui");
        }else if(this.displayNroBotellas> 50 && this.displayNroBotellas<=100 ){
        
         
            this.rango= "Eco-novato";
          }
         
        else if(this.displayNroBotellas> 100 && this.displayNroBotellas<=150){
       
          this.rango= "Eco-Junior";

        }else if(this.displayNroBotellas>150){
          {
        

            this.rango= "Eco-senior";
          }
        }

      })
      
    })
  }


  public addPersona(form?: NgForm){
    if(form.value._id){
      this.personaService.putPersona(form.value).subscribe(res => {
        this.resetForm(form);
        this.getPersona();
    
      });  
    }else {
      this.personaService.postPersona(form.value).subscribe(res => {
        this.getPersona();
        this.resetForm(form);
     
      });
    }
    
  }

  cerrarSesion(){
    localStorage.removeItem('currentuser');
    localStorage.removeItem('currentRol');
    
  }
  getPersona(){
    this.personaService.getPersona().subscribe(res => {
      this.personaService.personas = res as Persona[];
      console.log(res);
    });
  }

  deletePersona(_id: string, form: NgForm){
    if(confirm("Desea eliminar el evento?")){
      this.personaService.deletePersona(_id).subscribe(res => {
        this.getPersona();
        this.resetForm();
     
      });
    }
  }
  editPersona(personas: Persona, form: NgForm){
    this.personaService.selectPersona = personas;
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.personaService.selectPersona = new Persona();
    }
  }


  actualizarRango(NroBotellas: number){

   

    this.serviciousuario.putBotellasRango(this.usuarioById._id,this.usuarioEnSesion.NroBotellas, this.usuarioById.saldoActual, this.usuarioById.saldoVerde ).subscribe(res => {
      if(res){

        

       
       console.log(res + "idd");
        
        localStorage.setItem("", JSON.stringify(this.usuarioById))
        console.log(localStorage.getItem(""))
    
        this.displayNroBotellas = this.usuarioById.NroBotellas;
      
        console.log(this.usuarioEnSesion.NroBotellas);
      
    
      

      }
    });
  }


  


}
