import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import{FilaInterface} from '../../../models/fila-interface';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-filas',
  templateUrl: './list-filas.component.html',
  styleUrls: ['./list-filas.component.scss']
})
export class ListFilasComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  private filas: FilaInterface;
  pageActual: number = 1;
  public myCounter: number = 0;

  ngOnInit() {
    this.getListFilas();
  }


  getListFilas(): void {
    this.dataApiService
      .getAllFilas()
      .subscribe((filas: FilaInterface) => (this.filas = filas));
  }

  onDeleteFila(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteFila(id).subscribe();
    }
  }

  onPreUpdateFila(fila: FilaInterface): void {
    this.dataApiService.selectedFila = Object.assign({}, fila);
  }

  resetForm(filaForm?: NgForm): void {
    this.dataApiService.selectedFila = {
      id: null,
      idfila:'',
      nombre:'',
      idbloque:''
    };
  }

}


