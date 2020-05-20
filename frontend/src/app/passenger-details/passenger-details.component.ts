import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from "../Passenger";
import { PassengersService } from '../passengers.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  @Input()
  passenger: Passenger;
  @Output()
  changed = new EventEmitter();

  constructor(private passengersService: PassengersService,
    private messageService: MessageService) { }

  ngOnInit() {
  }

  editPassenger(id: number, name: string, surname: string) {
    let editedPassenger = new Passenger(id, name, surname);
    this.passengersService.editPassengers(editedPassenger).subscribe(response => {
      this.messageService.add(response);
      this.passenger = editedPassenger;
      this.change();
    });
  }

  deletePassenger(passenger: Passenger) {
    this.passengersService.deletePassenger(passenger).subscribe(response => {
      this.messageService.add(response);
      this.passenger = undefined;
      this.change();
    });
  }

  change() {
    this.changed.emit();
  }
}
