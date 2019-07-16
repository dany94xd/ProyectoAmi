import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from "../../../services/data-api.service";
import {EventoInterface} from 'src/app/models/evento-interface';
import{ActivatedRoute ,Params } from '@angular/router';
@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css']
})
export class LocalidadComponent implements OnInit {
  constructor(private authService: AuthService,  public dataApi: DataApiService, public route: ActivatedRoute) { }
  user: UserInterface;
  public evento: EventoInterface = {
    titulo:'',
    fecha:'',
    hora:'',
    descripcion:'',
    portada:'',
    precio:'',
    estado:'',
    caracter:'',
    idevento:'',
    idrecinto:''
};
 

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    const evento_id = this.route.snapshot.params['id'];
    this.getDetails(evento_id);
  }

  getDetails(id: string) {
    this.dataApi.getEventoById(id).subscribe(evento => (this.evento = evento));
  }
  }

