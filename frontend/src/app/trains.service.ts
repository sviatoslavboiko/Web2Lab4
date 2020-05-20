import { Injectable } from '@angular/core';
import { Train } from './Train';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainsService {

  private trainsUrl = `http://localhost:3000/trains`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getTrains(): Observable<Train[]> {
    this.log(`Fetch all trains`);
    return this.http.get<Train[]>(this.trainsUrl);
  }

  getTrain(id: number): Observable<Train> {
    this.log(`Fetch train with id ${id}`);
    return this.http.get<Train>(`${this.trainsUrl}/${id}`);
  }

  addTrain(train: Train): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', ['application/json']);
    this.log(`Add train with id ${train.id}`);
    return this.http.post(`${this.trainsUrl}`, train, {headers: headers, responseType: 'text'});
  }

  editTrain(train: Train): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', ['application/json']);
    this.log(`Edit train with id ${train.id}`);
    return this.http.put(`${this.trainsUrl}`, train, {headers: headers, responseType: 'text'});
  }

  deleteTrain(train: Train): Observable<string> {
    this.log(`Delete train with id ${train.id}`);
    return this.http.delete(`${this.trainsUrl}/${train.id}`, {responseType: "text"});
  }

  private log(message) {
    this.messageService.add(`TrainsService: ${message}`);
  }
}
