import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PassengersComponent } from './passengers/passengers.component';
import { TrainsComponent } from './trains/trains.component';
import { TicketsComponent } from './tickets/tickets.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: 'passengers', component: PassengersComponent },
  { path: 'trains', component: TrainsComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'statistics', component: StatisticsComponent }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}
