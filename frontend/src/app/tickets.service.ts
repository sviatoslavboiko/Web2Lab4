import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { Ticket } from './Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private ticketsUrl = `http://localhost:3000/tickets`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getTickets(): Observable<Ticket[]> {
    this.log(`Fetch all tickets`);
    return this.http.get<Ticket[]>(this.ticketsUrl);
  }

  getTicket(id: number): Observable<Ticket> {
    this.log(`Fetch ticket with id ${id}`);
    return this.http.get<Ticket>(`${this.ticketsUrl}/${id}`);
  }

  addTicket(ticket: Ticket): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', ['application/json']);
    this.log(`Add ticket with id ${ticket.id}`);
    return this.http.post(`${this.ticketsUrl}`, ticket, {headers: headers, responseType: 'text'});
  }

  editTicket(ticket: Ticket): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', ['application/json']);
    this.log(`Edit ticket with id ${ticket.id}`);
    return this.http.put(`${this.ticketsUrl}`, ticket, {headers: headers, responseType: 'text'});
  }

  deleteTicket(ticket: Ticket): Observable<string> {
    this.log(`Delete ticket with id ${ticket.id}`);
    return this.http.delete(`${this.ticketsUrl}/${ticket.id}`, {responseType: "text"});
  }

  private log(message) {
    this.messageService.add(`TicketsService: ${message}`);
  }
}
