import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import{LocalidadInterface} from '../../../models/localidad-interface';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-localidades',
  templateUrl: './list-localidades.component.html',
  styleUrls: ['./list-localidades.component.css']
})
export class ListLocalidadesComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  private localidades: LocalidadInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListLocalidades();
  }

  getListLocalidades(): void {
    this.dataApiService
      .getAllLocalidades()
      .subscribe((localidades: LocalidadInterface) => (this.localidades = localidades));
  }

  onDeleteLocalidad(id: string): void {
    if (confirm('Está seguro de eliminar?')) {
      this.dataApiService.deleteLocalidad(id).subscribe();
    }
  }

  onPreUpdateLocalidad(localidad: LocalidadInterface): void {
    this.dataApiService.selectedLocalidad = Object.assign({}, localidad);
  }

  resetForm(localidadForm?: NgForm): void {
    this.dataApiService.selectedLocalidad = {
      idlocalidad: null,
      idrecinto:'',
      caracter:'',      
      descripcion:''     
    };
  }
  


}
