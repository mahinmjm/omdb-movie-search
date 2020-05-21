import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SearchType, MovieService } from 'src/app/providers/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {

  movies: any;
  searchContent = '';
  type:SearchType = SearchType.all;
  constructor(private http:HttpClient, private movieService: MovieService) { }

  ngOnInit() {
  }

  searchMovies(){
     this.movieService.fetchData(this.searchContent, this.type).then(
      res => this.movies = res
    )
    console.log(this.movies);
  }


}
