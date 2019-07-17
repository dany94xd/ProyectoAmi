import { Component, OnInit } from "@angular/core";
//import { DataApiService } from "src/app/services/data-api.service";
//import { BookInterface } from "../../models/book-interface";
//import{EventoInterface} from "../../models/evento-interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
 // constructor(private dataApi: DataApiService) {}
 // private books: BookInterface;
  //private eventos:EventoInterface;
  ngOnInit() {
   //this.getListBooks();
    //this.getListEventos();
  }

  // getListBooks() {
  //   this.dataApi
  //     .getNotOffers()
  //     .subscribe((books: BookInterface) => (this.books = books));
  // }

  // getListEventos(){
  //   this.dataApi
  //   .getAllEventos()
  //   .subscribe((eventos:EventoInterface)=>(this.eventos = eventos));
  //  // .subscribe((eventos:EventoInterface)=>(this.eventos=eventos));
  // }
}
