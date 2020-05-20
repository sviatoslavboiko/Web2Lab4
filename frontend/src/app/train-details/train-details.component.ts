import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Train } from '../Train';
import { TrainsService } from '../trains.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css']
})
export class TrainDetailsComponent implements OnInit {

  @Input()
  train: Train;
  @Output()
  changed = new EventEmitter();

  constructor(private trainsService: TrainsService,
    private messageService: MessageService) { }

  ngOnInit() {
  }

  editTrain(id: number, name: string, route: string, seats: number) {
    let editedTrain = new Train(id, name, route, seats);
    this.trainsService.editTrain(editedTrain).subscribe(response => {
      this.messageService.add(response);
      this.train = editedTrain;
      this.change();
    });
  }

  deleteTrain(train: Train) {
    this.trainsService.deleteTrain(train).subscribe(response => {
      this.messageService.add(response);
      this.train = undefined;
      this.change;
    });
  }

  change() {
    this.changed.emit();
  }

}
