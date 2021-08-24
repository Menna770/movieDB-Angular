import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/trending.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  imgUrl:string = "https://image.tmdb.org/t/p/w200";
  trendingMovies:any[] = [];

  constructor(private _TrendingService:TrendingService) {

    _TrendingService.getTrending('movies').subscribe((data) => {
      this.trendingMovies = data.results;
    });

   }

  ngOnInit(): void {
  }

}
