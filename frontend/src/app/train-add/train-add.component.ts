import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrainsService } from '../trains.service';
import { MessageService } from '../message.service';
import { Train } from '../Train';

@Component({
  selector: 'app-train-add',
  templateUrl: './train-add.component.html',
  styleUrls: ['./train-add.component.css']
})
export class TrainAddComponent implements OnInit {

  @Output()
  changed = new EventEmitter();

  constructor(private trainsService: TrainsService,
    private messageService: MessageService) { }

  ngOnInit() {
  }

  addTrain(id: number, name: string, routeStart: string, routeEnd: string, seats: number) {
    let train = new Train(id, name, `${routeStart}:${routeEnd}`, seats);
    this.trainsService.addTrain(train).subscribe(response => {
      this.messageService.add(response);
      this.change();
    })
  }

  private change() {
    this.changed.emit();
  }
}
