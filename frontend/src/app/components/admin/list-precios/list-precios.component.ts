import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import{PrecioInterface} from '../../../models/precio-interface';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-precios',
  templateUrl: './list-precios.component.html',
  styleUrls: ['./list-precios.component.scss']
})
export class ListPreciosComponent implements OnInit {
  constructor(private dataApiService: DataApiService) { }
  private precios: PrecioInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListPrecios();
  }

  getListPrecios(): void {
    this.dataApiService
      .getAllPrecios()
      .subscribe((precios:  PrecioInterface) => (this.precios = precios));
  }

  onDeletePrecio(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deletePrecio(id).subscribe();
    }
  }

  onPreUpdatePrecio(precio:  PrecioInterface): void {
    this.dataApiService.selectedPrecio = Object.assign({}, precio);
  }

  resetForm(precioForm?: NgForm): void {
    this.dataApiService.selectedPrecio = {
      id: null,
      nombre:'',
      idevento:'',
      idlocalidad:'',
      valor:''
    };
  }
 

}
