import { Component } from '@angular/core';
import { MovieDBService } from 'src/app/services/movie-db.service';
import { MoviesSeries } from 'src/app/types/moviesSeries';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [ MovieDBService]
})
export class InicioComponent {
  moviesSerie: MoviesSeries[] = [];

  movieResult: MoviesSeries[] = [];

  toSearch: string = '';

  filter: 'Todos' | 'Movie' | 'Serie' = 'Todos';

  changeFilter = (filtro: 'Todos' | 'Movie' | 'Serie') => {
    this.filter = filtro;
    if (filtro === 'Todos' && this.movieResult.length ===0){
      this.getAllTrending();
    }
    if (filtro === 'Movie' && this.movies.length ===0){
      this.getAllMovies();
    }
    if (filtro === 'Serie' && this.series.length ===0){
      this.getAllTvShows();
    }
  };
  movies: any[]=[];
  series: any[]=[];

  constructor(
    private _movieDBService: MovieDBService
  ){}

  ngOnInit(){
    this.getAllTrending();
  }

  getAllTrending(){
    this._movieDBService.getTrending().subscribe({
      next: (response) => {
        console.log ('Esta todo bien', response);
        this.moviesSerie = response.results;
        this.movieResult = this.moviesSerie;
      },
      error: (error) => {
        console.log ('Error', error);
      },
      complete() {
        console.log ('Finalizo');
      },
    })
  }
  getAllMovies(){
    this._movieDBService.getMovies().subscribe({
      next: (response) => {
        console.log ('Esta todo bien', response);
        this.movies = response.results;
      },
      error: (error) => {
        console.log ('Error', error);
      },
      complete() {
        console.log ('Finalizo');
      },
    })
  }
  getAllTvShows(){
    this._movieDBService.getSeries().subscribe({
      next: (response) => {
        console.log ('Esta todo bien', response);
        this.series = response.results;
      },
      error: (error) => {
        console.log ('Error', error);
      },
      complete() {
        console.log ('Finalizo');
      },
    })
  }

  search(value: string) {
    this.movieResult = [];
    this.moviesSerie.forEach((data) => {
      if (data.name.toLowerCase().includes(value.toLowerCase()))
        this.movieResult.push(data);
    });
    if (!value) this.movieResult = this.moviesSerie;
  }
}
