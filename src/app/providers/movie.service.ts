import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http:HttpClient ) { }

   fetchData(title:string, type:SearchType)  {
    let url = 'http://www.omdbapi.com/?s=' + encodeURI(title) + '&type=' + type + '&apikey=8f43818e';
    return this.http.get(url).toPromise().then( (res) => {return res['Search'] });
  }

  getDetails(id: string) {
    return this.http.get( 'http://www.omdbapi.com/?i='+id+'&plot=full&apikey=8f43818e');
  }

}
