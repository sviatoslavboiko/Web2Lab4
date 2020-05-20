import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Train } from '../Train';
import { PassengersService } from '../passengers.service';
import { TrainsService } from '../trains.service';
import { MessageService } from '../message.service';
import { TicketsService } from '../tickets.service';
import { Passenger } from '../Passenger';
import { Ticket } from '../Ticket';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  @Input()
  ticket: Ticket;
  @Output()
  changed = new EventEmitter();

  passengers: Passenger[];
  trains: Train[];

  constructor(
    private passengersService: PassengersService,
    private trainsService: TrainsService,
    private ticketsService: TicketsService,
    private messageService: MessageService
  ) { }

  editTicket(id: number, price: number, passengerId: number, trainId: number, seat: number, date: Date) {
    let passenger: Passenger = undefined;
    this.passengersService.getPassenger(passengerId).subscribe(result => passenger = result);
    let train: Train = undefined;
    this.trainsService.getTrain(trainId).subscribe(result => train = result);
    let ticket = new Ticket(id, price, passenger, train, seat, date);
    this.ticketsService.editTicket(ticket).subscribe(response => {
      this.messageService.add(response);
      this.change();
    });
  }

  deleteTicket(ticket: Ticket) {
    this.ticketsService.deleteTicket(ticket).subscribe(response => {
      this.messageService.add(response);
      this.ticket = undefined;
      this.change();
    });
  }

  ngOnInit() {
    this.getInfo();
  }

  private getInfo() {
    this.getPassengers();
    this.getTrains();
  }

  private getPassengers() {
    this.passengersService.getPassengers().subscribe(passengers => this.passengers = passengers);
  }

  private getTrains() {
    this.trainsService.getTrains().subscribe(trains => this.trains = trains);
  }

  change() {
    this.changed.emit();
  }
}
