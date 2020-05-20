import { Component, OnInit } from '@angular/core';
import { Train } from '../Train';
import { StatisticsService } from '../statistics.service';

@Component({
  selector: 'app-statistics-trains-without-tickets',
  templateUrl: './statistics-trains-without-tickets.component.html',
  styleUrls: ['./statistics-trains-without-tickets.component.css']
})
export class StatisticsTrainsWithoutTicketsComponent implements OnInit {

  trains: Train[];

  constructor(
    private statisticsService: StatisticsService
  ) { }

  ngOnInit() {
    this.initTrains();
  }

  private initTrains() {
    this.statisticsService.getTrainsWithoutSoldTickets().subscribe(response => this.trains = response);
  }
}
