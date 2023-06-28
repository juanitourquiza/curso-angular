import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  key: string = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTQ0YTU2YTQ1YmI2Y2ZlMzVjNjVlZTM5Njg1MWM4ZiIsInN1YiI6IjY0OTRkMDY3ODgwNTUxMDEyNTk4MTc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vpITQRmwNQaZi6DqJMbavXnyfYlnRBNaI066ic3vZn8';

  baseURL: string = 'https://api.themoviedb.org/3/';
  constructor(
    private _httpClient: HttpClient
  ) { }

  getTrending(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.key);

    return this._httpClient.get(this.baseURL + 'trending/all/week', {
      headers
    });
  }

  getMovies(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.key);

    return this._httpClient.get(this.baseURL + 'movie/popular', {
      headers
    });
  }

  getSeries(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.key);

    return this._httpClient.get(this.baseURL + 'tv/popular', {
      headers
    });
  }
}
