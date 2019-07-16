import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import{RecintoInterface} from '../../../models/recinto-interface';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-recintos',
  templateUrl: './list-recintos.component.html',
  styleUrls: ['./list-recintos.component.css']
})
export class ListRecintosComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  private recintos: RecintoInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListRecintos();
  }

  getListRecintos(): void {
    this.dataApiService
      .getAllRecintos()
      .subscribe((recintos: RecintoInterface) => (this.recintos = recintos));
  }

  onDeleteRecinto(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteRecinto(id).subscribe();
    }
  }

  onPreUpdateRecinto(recinto: RecintoInterface): void {
    this.dataApiService.selectedRecinto = Object.assign({}, recinto);
  }

  resetForm(recintoForm?: NgForm): void {
    this.dataApiService.selectedRecinto = {
      id: null,
      nombre:'',
      direccion:'',
      descripcion:''
     
    };
  }
}
