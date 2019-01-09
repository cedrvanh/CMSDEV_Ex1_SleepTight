import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TipsService {
  private _apiUrl = `${environment.api.url}${environment.api.endPoints.tips}`;

  constructor(private httpClient: HttpClient) { }

  public getTips(): Observable<any> {
    return this.httpClient.get(this._apiUrl);
  }
}
