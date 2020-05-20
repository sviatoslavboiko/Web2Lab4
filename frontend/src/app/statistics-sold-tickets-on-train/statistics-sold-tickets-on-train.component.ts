import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics.service';
import { TrainsService } from '../trains.service';
import { Train } from '../Train';
import { Ticket } from '../Ticket';

@Component({
  selector: 'app-statistics-sold-tickets-on-train',
  templateUrl: './statistics-sold-tickets-on-train.component.html',
  styleUrls: ['./statistics-sold-tickets-on-train.component.css']
})
export class StatisticsSoldTicketsOnTrainComponent implements OnInit {

  trains: Train[];
  tickets: Ticket[];

  constructor(
    private statisticsService: StatisticsService,
    private trainsService: TrainsService
  ) { }

  ngOnInit() {
    this.initTrains();
  }

  private initTrains() {
    this.trainsService.getTrains().subscribe(response => this.trains = response);
  }

  getSoldTicketsOnTrain(trainId: number) {
    this.statisticsService.getSoldTicketsOnTrain(trainId).subscribe(response => this.tickets = response);
  }
}
