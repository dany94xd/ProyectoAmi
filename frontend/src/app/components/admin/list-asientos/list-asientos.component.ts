import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import{AsientoInterface} from '../../../models/asiento-interface';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-asientos',
  templateUrl: './list-asientos.component.html',
  styleUrls: ['./list-asientos.component.scss']
})
export class ListAsientosComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  private asientos: AsientoInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListAsientos();
  }

  getListAsientos(): void {
    this.dataApiService
      .getAllAsientos()
      .subscribe((asientos: AsientoInterface) => (this.asientos = asientos));
  }

  onDeleteAsiento(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteAsiento(id).subscribe();
    }
  }

  onPreUpdateAsiento(asiento: AsientoInterface): void {
    this.dataApiService.selectedAsiento = Object.assign({}, asiento);
  }

  resetForm(asientoForm?: NgForm): void {
    this.dataApiService.selectedAsiento = {
      id: null,
      idasiento:'',
      idfila:'',
      nombre:''
      
    };
  }

}
