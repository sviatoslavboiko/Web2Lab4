import { Component, OnInit } from '@angular/core';
import { PassengersService } from "../passengers.service";
import { Passenger } from '../Passenger';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  passengers: Passenger[];
  selectedPassenger: Passenger;

  constructor(private passengersService: PassengersService) { }

  ngOnInit() {
    this.getPassengers();
  }

  getPassengers() {
    this.passengersService.getPassengers().subscribe(passengers => this.passengers = passengers);
  }

  onSelect(passenger: Passenger) {
    this.passengersService.getPassenger(passenger.id).subscribe(passenger => this.selectedPassenger = passenger);
  }
}
