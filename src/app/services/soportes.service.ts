import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soporte } from '../interfaces/soportes';

@Injectable({
  providedIn: 'root'
})
export class SoportesService {
  //private myAppUrl: string;
  private myApiUrl: string;
  private myAppUrl: string = 'http://localhost:3000';
  //private myApiUrl: string = 'api/soportes/';
  

  constructor(private http: HttpClient) { 
    //this.myAppUrl = environment.endpoint
    this.myApiUrl = 'api/soportes/';
    
   }

   getListarSoportes(): Observable<Soporte[]>{
    return this.http.get<Soporte[]>(`${this.myAppUrl}/${this.myApiUrl}`);
   }

   deleteSoporte(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}/${this.myApiUrl}${id}`)
   }

   saveSoporte(soporte: Soporte): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}/${this.myApiUrl}`, soporte)
   }

   getSoporte(id: number): Observable<Soporte>{
    return this.http.get<Soporte>(`${this.myAppUrl}/${this.myApiUrl}${id}`)
   }

   updateSoporte(id: number, soporte: Soporte): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}/${this.myApiUrl}${id}`, soporte)
   }
}
