import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoportesService {
  private myAppUrl: string;
  private myApiUrl: string;
  constructor() { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/soportes/'
   }
}
