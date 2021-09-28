import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Compra } from '../menu/Shared/compra';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  compra: any;
  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  createPurchase(compra:any): Observable<Compra> {
    return this.http.post<Compra>('http://localhost:8090/api/despacho',JSON.stringify(this.compra), this.httpOptions)
  }

}
