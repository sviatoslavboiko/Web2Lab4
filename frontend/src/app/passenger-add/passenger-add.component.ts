import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Passenger } from "../Passenger";
import { PassengersService } from '../passengers.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-passenger-add',
  templateUrl: './passenger-add.component.html',
  styleUrls: ['./passenger-add.component.css']
})
export class PassengerAddComponent implements OnInit {

  @Output()
  changed = new EventEmitter();

  constructor(private passengersService: PassengersService,
    private messageService: MessageService) { }

  ngOnInit() {
  }

  addPassenger(id: number, name: string, surname: string) {
    let newPassenger = new Passenger(id, name, surname);
    this.passengersService.addPassenger(newPassenger).subscribe(response => {
      this.messageService.add(response);
      this.change();
    });
  }

  private change() {
    this.changed.emit();
  }

}
