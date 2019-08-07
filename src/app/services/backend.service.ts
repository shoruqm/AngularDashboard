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
  
  getData(page: number, itemType: string): Observable<PeriodicElement[]> {
    return this._http.get<PeriodicElement[]>(this._backendUrl + "/items/" + page + "/" + itemType);
  }

  postRow(row: PeriodicElement): Observable<PeriodicElement> {
    return this._http.post<PeriodicElement>(this._backendUrl + "/item", row);
  }
  deleteRow(No: number): Observable<number>{
    return this._http.delete<number>(this._backendUrl + "/item/" + No);
  }
}