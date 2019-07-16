import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import{BloqueInterface} from '../../../models/bloque-interface';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-bloques',
  templateUrl: './list-bloques.component.html',
  styleUrls: ['./list-bloques.component.css']
})
export class ListBloquesComponent implements OnInit {
  constructor(private dataApiService: DataApiService) { }
  private bloques: BloqueInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListBloques();
  }

  getListBloques(): void {
    this.dataApiService
      .getAllBloques()
      .subscribe((bloques: BloqueInterface) => (this.bloques = bloques));
  }

  onDeleteBloque(id: string): void {
    if (confirm('Seguro que desea Eliminar?')) {
      this.dataApiService.deleteBloque(id).subscribe();
    }
  }

  onPreUpdateBloque(bloque: BloqueInterface): void {
    this.dataApiService.selectedBloque = Object.assign({}, bloque);
  }

  resetForm(bloqueForm?: NgForm): void {
    this.dataApiService.selectedBloque = {
      id: null,
      idbloque:'',
      idlocalidad:'',      
      descripcion:''      
    };
  }

}
