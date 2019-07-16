import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import{TarifaInterface} from '../../../models/tarifa-interface';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-tarifa',
  templateUrl: './list-tarifa.component.html',
  styleUrls: ['./list-tarifa.component.css']
})
export class ListTarifaComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  private tarifas: TarifaInterface;
s
  ngOnInit() {
    this.getListTarifas();
  }

  getListTarifas(): void {
    this.dataApiService
      .getAllTarifas()
      .subscribe((tarifas: TarifaInterface) => (this.tarifas = tarifas));
  }

  onDeleteTarifa(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteTarifa(id).subscribe();
    }
  }

  onPreUpdateTarifa(tarifa: TarifaInterface): void {
    this.dataApiService.selectedTarifa = Object.assign({}, tarifa);
  }

  resetForm(tarifaForm?: NgForm): void {
    this.dataApiService.selectedTarifa = {
      id: null,
      descripcion:'',
      caracter:''
    };
  }
}

