import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ResgisterComponent } from './components/resgister/resgister.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'about', canActivate: [AuthGuard], component: AboutComponent},
  {path: 'movies', canActivate: [AuthGuard], component: MoviesComponent},
  {path: 'moviedetails/:id', canActivate: [AuthGuard], component: MoviedetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: ResgisterComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
