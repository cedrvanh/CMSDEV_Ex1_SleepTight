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

  public getHashtags(): Observable<any> {
    return this.httpClient.get(`${environment.api.url}/wp/v2/hashtags`);
  }

  public getHashtagsPostsWithFilter(order): Observable<any> {
    return this.httpClient.get(`${this._apiUrl}?_embed&order=${order ? '&order=' + order : ''}`);
  }

  public postHashtagPost(data: object): Observable<any> {
    return this.httpClient.post(`${this._apiUrl}?status=pending`, data);
  }

  public updateHashtagPost(id: Number, data: object): Observable<any> {
    return this.httpClient.post(`${environment.api.url}/acf/v3/photos/${id}`, data);
  }

  public uploadPhoto(data, headers): Observable<any> {
    return this.httpClient.post(`${environment.api.url}/wp/v2/media`, data, headers);
  }

  public delete(id: Number): Observable<any> {
    return this.httpClient.delete(`${environment.api.url}/wp/v2/photos/${id}`);
  }
}
