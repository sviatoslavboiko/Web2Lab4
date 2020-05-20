import { Component, OnInit } from '@angular/core';
import { Train } from '../Train';
import { TrainsService } from '../trains.service';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {

  trains: Train[];
  selectedTrain: Train;

  constructor(private trainsService: TrainsService) { }

  ngOnInit() {
    this.getTrains();
  }

  getTrains() {
    this.trainsService.getTrains().subscribe(trains => this.trains = trains);
  }

  onSelect(train: Train) {
    this.trainsService.getTrain(train.id).subscribe(train => this.selectedTrain = train);
  }
}
