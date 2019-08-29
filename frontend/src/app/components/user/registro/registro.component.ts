import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { PersonasService } from 'src/app/services/personas/personas.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private servicioUsuario: UsuarioService, private servicioPersona: PersonasService) { }
  public name: string;
  public lastName: string;
  public email: string;
  public matricula: string;
  public cedula: string;
  public password: string;
  public user: string;

  ngOnInit() {
  }


}
