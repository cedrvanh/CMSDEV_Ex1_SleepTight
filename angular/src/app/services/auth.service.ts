import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _apiUrl = `${environment.api.url}${environment.api.endPoints.auth}`;

  constructor(private httpClient: HttpClient) { }

  public login(data: object): Observable<any> {
    return this.httpClient.post(this._apiUrl, data);
  }

  public register(data: object): Observable<any> {
    return this.httpClient.post(`${environment.api.url}/wp/v2/users`, data);
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public setToken(token: string): void {
    console.log('Saving token in LocalStorage..');
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated() {
    const token = localStorage.getItem('token');
    return (!token) ? false : true;
  }
}
