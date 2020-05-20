import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics.service';

@Component({
  selector: 'app-statistics-popular-routes',
  templateUrl: './statistics-popular-routes.component.html',
  styleUrls: ['./statistics-popular-routes.component.css']
})
export class StatisticsPopularRoutesComponent implements OnInit {

  routes: {route: string, amount: number}[];

  constructor(
    private statisticsService: StatisticsService
  ) { }

  ngOnInit() {
    this.initRoutes();
  }

  private initRoutes() {
    this.statisticsService.getPopularRoutes().subscribe(response => this.routes = response);
  }
}
