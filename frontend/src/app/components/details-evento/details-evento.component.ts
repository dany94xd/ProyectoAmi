// import { Component, OnInit } from '@angular/core';
// import {DataApiService} from 'src/app/services/data-api.service';
// import{ActivatedRoute ,Params } from '@angular/router';
// import {EventoInterface} from 'src/app/models/evento-interface'

// @Component({
//   selector: 'app-details-evento',
//   templateUrl: './details-evento.component.html',
//   styleUrls: ['./details-evento.component.css']
// })
// export class DetailsEventoComponent implements OnInit {
//   constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
//   private evento: EventoInterface = {
//       titulo:'',
//       fecha:'',
//       hora:'',
//       descripcion:'',
//       portada:'',
//       precio:'',
//       estado:'',
//       caracter:'',
//       idevento:'',
//       idrecinto:''
//   };
//   ngOnInit() {
//     const evento_id = this.route.snapshot.params['id'];
//     this.getDetails(evento_id);
//   }

//   getDetails(id: string) {
//     this.dataApi.getEventoById(id).subscribe(evento => (this.evento = evento));
//   }
// }



