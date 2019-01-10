import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private _apiUrl = `${environment.api.url}${environment.api.endPoints.users}`;

  constructor(private httpClient: HttpClient) { }

  public getCurrentUser(): Observable<any> {
    return this.httpClient.get(`${this._apiUrl}/me`);
  }

  public getAllUsers(): Observable<any> {
    return this.httpClient.get(`${this._apiUrl}`);
  }

  public getUserById(id: Number): Observable<any> {
    return this.httpClient.get(`${this._apiUrl}${id}`);
  }

  public postFields(id: number, data: object): Observable<any> {
    return this.httpClient.post(`${environment.api.url}${environment.api.endPoints.acf}/users/${id}`, data);
  }

  public searchUser(term: string): Observable<any> {
    return this.httpClient.get(`${environment.api.url}${environment.api.endPoints.users}?search=${term}`);
  }
}
