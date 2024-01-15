import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  protected api_url: string = '';

  constructor(protected http: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.api_url + '')
  }

  search(query: string): Observable<T> {
    return this.http.get<T>(this.api_url + `/${query}`);
  }

}
