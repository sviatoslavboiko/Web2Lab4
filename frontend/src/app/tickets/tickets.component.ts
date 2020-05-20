import { Component, OnInit } from '@angular/core';
import { Ticket } from '../Ticket';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[];
  selectedTicket: Ticket;

  constructor(private ticketsService: TicketsService) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    this.ticketsService.getTickets().subscribe(tickets => {
      // console.log(JSON.stringify(tickets, null, 2));
      this.tickets = tickets;
    });
  }

  onSelect(ticket: Ticket) {
    this.ticketsService.getTicket(ticket.id).subscribe(ticket => this.selectedTicket = ticket);
  }
}
