import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HashtagsService {
  private _apiUrl = `${environment.api.url}${environment.api.endPoints.hashtags}`;

  constructor(private httpClient: HttpClient) { }

  public getHashtagPosts(): Observable<any> {
    return this.httpClient.get(`${this._apiUrl}?_embed`);
  }

  public postHashtagPost(data: object): Observable<any> {
    return this.httpClient.post(`${this._apiUrl}?status=pending`, data);
  }

  public uploadPhoto(data): Observable<any> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Disposition': `attachment; filename=${data.get('file').name}`
      })
    };

    return this.httpClient.post(`${environment.api.url}/media`, data, headers);
  }
}
