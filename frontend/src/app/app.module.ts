import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PassengersComponent } from './passengers/passengers.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerAddComponent } from './passenger-add/passenger-add.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainsComponent } from './trains/trains.component';
import { TrainAddComponent } from './train-add/train-add.component';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { StatisticsPopularRoutesComponent } from './statistics-popular-routes/statistics-popular-routes.component';
import { StatisticsProfitRoutesComponent } from './statistics-profit-routes/statistics-profit-routes.component';
import { StatisticsSoldTicketsOnTrainComponent } from './statistics-sold-tickets-on-train/statistics-sold-tickets-on-train.component';
import { StatisticsTrainsWithoutTicketsComponent } from './statistics-trains-without-tickets/statistics-trains-without-tickets.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengersComponent,
    PassengerDetailsComponent,
    MessagesComponent,
    PassengerAddComponent,
    TrainsComponent,
    TrainAddComponent,
    TrainDetailsComponent,
    TicketAddComponent,
    TicketsComponent,
    TicketDetailsComponent,
    StatisticsPopularRoutesComponent,
    StatisticsProfitRoutesComponent,
    StatisticsSoldTicketsOnTrainComponent,
    StatisticsTrainsWithoutTicketsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
