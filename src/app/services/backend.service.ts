import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../models/PeriodicElement';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private _backendUrl = "http://localhost:3003";

  constructor(private _http: HttpClient) { }
  
  getData(page: number): Observable<PeriodicElement[]> {
    return this._http.get<PeriodicElement[]>(this._backendUrl + "/items/" + page);
  }

  getRow(id: number): Observable<PeriodicElement> {
    return this._http.get<PeriodicElement>(this._backendUrl + "/items/" + id);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    //console.log("error");
    return null;
}
private log(message: string) {
  //console.log("log");
}
}