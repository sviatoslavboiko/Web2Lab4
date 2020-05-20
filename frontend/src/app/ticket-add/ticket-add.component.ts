import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { MessageService } from '../message.service';
import { Passenger } from '../Passenger';
import { Train } from '../Train';
import { Ticket } from '../Ticket';
import { PassengersService } from '../passengers.service';
import { TrainsService } from '../trains.service';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {

  @Output()
  changed = new EventEmitter();

  passengers: Passenger[];
  trains: Train[];

  constructor(
    private ticketsService: TicketsService,
    private passengersService: PassengersService,
    private trainsService: TrainsService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getInfo();
  }

  addTicket(id: number, price: number, passengerId: number, trainId: number, seat: number, date: Date) {
    let passenger: Passenger = this.passengers.find(p => p.id === passengerId);
    let train: Train = this.trains.find(t => t.id === trainId);
    let ticket = new Ticket(id, price, passenger, train, seat, date);
    this.ticketsService.addTicket(ticket).subscribe(response => {
      this.messageService.add(response);
      this.change();
    });
  }

  getInfo() {
    this.getPassengers();
    this.getTrains();
  }

  private getPassengers() {
    this.passengersService.getPassengers().subscribe(passengers => this.passengers = passengers);
  }

  private getTrains() {
    this.trainsService.getTrains().subscribe(trains => this.trains = trains);
  }

  private change() {
    this.changed.emit();
  }
}
