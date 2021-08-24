import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgUrl:string = "https://image.tmdb.org/t/p/w200";
  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingPeople:any[] = [];

  constructor(private _TrendingService:TrendingService) {

    _TrendingService.getTrending('movies').subscribe((data) => {
      this.trendingMovies = data.results.slice(0,10);
    });

    _TrendingService.getTrending('tv').subscribe((data) => {
      this.trendingTv = data.results.slice(0,10);
    });

    _TrendingService.getTrending('person').subscribe((data) => {
      this.trendingPeople = data.results.slice(0,10);
    })
  }

  ngOnInit(): void {
  }

}
