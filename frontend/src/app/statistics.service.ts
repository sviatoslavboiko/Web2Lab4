import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { Ticket } from './Ticket';
import { Train } from './Train';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private url = `http://localhost:3000/statistics`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getPopularRoutes(): Observable<{route: string, amount: number}[]> {
    this.log(`Fetch most popular routes`);
    return this.http.get<{route: string, amount: number}[]>(`${this.url}/popularRoutes`);
  }

  getProfitRoutes(): Observable<{route: string, profit: number}[]> {
    this.log(`Fetch most profitable routes`);
    return this.http.get<{route: string, profit: number}[]>(`${this.url}/profitRoutes`);
  }

  getSoldTicketsOnTrain(id: number): Observable<Ticket[]> {
    this.log(`Fetch sold tickets on train with id ${id}`);
    return this.http.get<Ticket[]>(`${this.url}/soldTicketsOnTrain/${id}`);
  }

  getTrainsWithoutSoldTickets(): Observable<Train[]> {
    this.log(`Fetch all trains without sold tickets`);
    return this.http.get<Train[]>(`${this.url}/trainAndRoutesWithoutSoldTickets`);
  }

  private log(message) {
    this.messageService.add(`StatisticsService: ${message}`);
  }
}
