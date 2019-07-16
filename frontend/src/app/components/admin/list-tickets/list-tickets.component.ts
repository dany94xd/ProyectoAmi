import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { TicketInterface } from '../../../models/ticket-interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {
  constructor(private dataApiService: DataApiService) { }
  private tickets: TicketInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListTickets();
  }

  getListTickets(): void {
    this.dataApiService
      .getAllTickets()
      .subscribe((tickets: TicketInterface) => (this.tickets = tickets));
  }

  onDeleteTicket(id: string): void {
    if (confirm('Está seguro de Eliminar?')) {
      this.dataApiService.deleteTicket(id).subscribe();
    }
  }

  onPreUpdateTicket(ticket: TicketInterface): void {
    this.dataApiService.selectedTicket = Object.assign({}, ticket);
  }

  resetForm(ticketForm?: NgForm): void {
    this.dataApiService.selectedTicket = {
      id: null,
      idticket:'',  
      idevento:'',
      idprecio:'',
      idtarifa:'',
      idasiento:'',
      valor:'',
      codigo:''
    };
  }

}

