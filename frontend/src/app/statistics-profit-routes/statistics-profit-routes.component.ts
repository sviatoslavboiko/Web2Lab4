import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics.service';

@Component({
  selector: 'app-statistics-profit-routes',
  templateUrl: './statistics-profit-routes.component.html',
  styleUrls: ['./statistics-profit-routes.component.css']
})
export class StatisticsProfitRoutesComponent implements OnInit {

  routes: {route: string, profit: number}[];

  constructor(
    private statisticsService: StatisticsService
  ) { }

  ngOnInit() {
    this.initRoutes();
  }

  private initRoutes() {
    this.statisticsService.getProfitRoutes().subscribe(response => this.routes = response);
  }
}
