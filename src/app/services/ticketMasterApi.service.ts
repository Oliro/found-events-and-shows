import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Attraction, TicketMaster } from '../models/ticketMaster';
import { EnvTm } from 'src/environments/env-tm';

@Injectable({
  providedIn: 'root'
})
export class ticketMasterApiService extends EnvTm {

  API_URL = 'https://app.ticketmaster.com/discovery/v2/attractions.json?';
  PAGE = 0;
  SIZE = 50;

  constructor(protected http: HttpClient) {
    super();
  }

  search(query: string): Observable<Attraction[]> {
    return this.http.get<TicketMaster>(this.API_URL+`keyword=${query}&page=${this.PAGE}&size=${this.SIZE}`+this.API_TOKEN).pipe(map((result) => result._embedded.attractions));
  }
}
