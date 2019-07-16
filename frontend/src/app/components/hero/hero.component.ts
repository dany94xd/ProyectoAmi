import { Component, OnInit } from '@angular/core';
import{EventoInterface} from "../../models/evento-interface";
import { DataApiService } from "src/app/services/data-api.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  private eventos:EventoInterface;

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {

    this.getListEventos();
  }


  getListEventos(){
    this.dataApi
    .getAllEventos()
    .subscribe((eventos:EventoInterface)=>(this.eventos = eventos));
   // .subscribe((eventos:EventoInterface)=>(this.eventos=eventos));
  }

}
