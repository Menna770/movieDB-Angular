import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from 'src/app/trending.service';



@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  imgUrl:string = "https://image.tmdb.org/t/p/original";
  id:string = '';
  movieDetails:any = {};

  constructor(private _ActivatedRoute:ActivatedRoute, private _TrendingService:TrendingService) {

    this.id = _ActivatedRoute.snapshot.params.id;

    _TrendingService.getMovieDetails(this.id).subscribe((response) => {
      this.movieDetails = response;
    })
  }

  ngOnInit(): void {
  }

}
