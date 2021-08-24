import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType:string):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361`);
  }

  getMovieDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=52bbcddeda849047525b51d6f8a12361&language=en-US`);
  }
}
