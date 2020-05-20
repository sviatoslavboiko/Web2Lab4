import { Injectable } from '@angular/core';
import { Passenger } from './Passenger';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {

  private passengersUrl = `http://localhost:3000/passengers`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getPassengers(): Observable<Passenger[]> {
    this.log(`Fetch all passengers`);
    return this.http.get<Passenger[]>(this.passengersUrl);
  }

  getPassenger(id: number): Observable<Passenger> {
    this.log(`Fetch passenger with id ${id}`);
    return this.http.get<Passenger>(`${this.passengersUrl}/${id}`);
  }

  addPassenger(passenger: Passenger): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', ['application/json']);
    this.log(`Add passenger with id ${passenger.id}`);
    return this.http.post(`${this.passengersUrl}`, passenger, {headers: headers, responseType: 'text'});
  }

  editPassengers(passenger: Passenger): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', ['application/json']);
    this.log(`Edit passenger with id ${passenger.id}`);
    return this.http.put(`${this.passengersUrl}`, passenger, {headers: headers, responseType: 'text'});
  }

  deletePassenger(passenger: Passenger): Observable<string> {
    this.log(`Delete passenger with id ${passenger.id}`);
    return this.http.delete(`${this.passengersUrl}/${passenger.id}`, {responseType: "text"});
  }

  private log(message) {
    this.messageService.add(`PassengersService: ${message}`);
  }
}
