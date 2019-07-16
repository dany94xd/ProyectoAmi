import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book-interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private dataApiService: DataApiService,
    private location: Location
  ) { }
  ngOnInit() {
  }

  onSaveBook(bookForm: NgForm): void {
    if (bookForm.value.bookId == null) {
      // NEW
      this.dataApiService.saveBook(bookForm.value).subscribe(book => location.reload());
    } else {
      // update
      this.dataApiService.updateBook(bookForm.value).subscribe(book => location.reload());
    }
  }

onSaveEvento(eventoForm:NgForm):void{
  if(eventoForm.value.eventoId == null){
    this.dataApiService.saveEvento(eventoForm.value)
    .subscribe(evento=>location.reload());

  }else{
    this.dataApiService.updateEvento(eventoForm.value)
    .subscribe(evento=>location.reload());
  }
}

onSaveRecinto(recintoForm:NgForm):void{
  if(recintoForm.value.recintoId == null){
    this.dataApiService.saveRecinto(recintoForm.value)
    .subscribe(recinto=>location.reload());

  }else{
    this.dataApiService.updateRecinto(recintoForm.value)
    .subscribe(recinto=>location.reload());
  }
}


onSaveTarifa(tarifaForm:NgForm):void{
  if(tarifaForm.value.tarifaId == null){
    this.dataApiService.saveTarifa(tarifaForm.value)
    .subscribe(tarifa=>location.reload());

  }else{
    this.dataApiService.updateTarifa(tarifaForm.value)
    .subscribe(tarifa=>location.reload());
  }
}

onSaveLocalidad(localidadForm:NgForm):void{
  if(localidadForm.value.localidadId == null){
    this.dataApiService.saveLocalidad(localidadForm.value).subscribe(localidad=>location.reload());

  }else{
    this.dataApiService.updateLocalidad(localidadForm.value).subscribe(localidad=>location.reload());
  }
}

onSaveFila(filaForm:NgForm):void{
  if(filaForm.value.filaId == null){
    this.dataApiService.saveFila(filaForm.value).subscribe(fila=>location.reload());

  }else{
    this.dataApiService.updateFila(filaForm.value).subscribe(fila=>location.reload());
  }
}



onSavePrecio(precioForm:NgForm):void{
  if(precioForm.value.precioId == null){
    this.dataApiService.savePrecio(precioForm.value).subscribe(precio=>location.reload());

  }else{
    this.dataApiService.updatePrecio(precioForm.value).subscribe(precio=>location.reload());



  }
}


onSaveBloque(bloqueForm:NgForm):void{
  if(bloqueForm.value.bloqueId == null){
    this.dataApiService.saveBloque(bloqueForm.value)
    .subscribe(bloque=>location.reload());

  }else{
    this.dataApiService.updateBloque(bloqueForm.value)
    .subscribe(bloque=>location.reload());
  }
}


onSaveAsiento(asientoForm:NgForm):void{
  if(asientoForm.value.asientoId == null){
    this.dataApiService.saveAsiento(asientoForm.value)
    .subscribe(asiento=>location.reload());

  }else{
    this.dataApiService.updateAsiento(asientoForm.value)
    .subscribe(asiento=>{
      return location.reload();
    });
  }
}

onSaveTicket(ticketForm:NgForm):void{
  if(ticketForm.value.ticketId == null){
    this.dataApiService.saveTicket(ticketForm.value)
    .subscribe(ticket=>location.reload());

  }else{
    this.dataApiService.updateTicket(ticketForm.value)
    .subscribe(ticket=>location.reload());
  }
}




}
