import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MovieDBService } from 'src/app/services/movie-db.service';
import { Movie } from 'src/app/types/Movies';
import { MoviesSeries } from 'src/app/types/moviesSeries';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [ FirestoreService ]
})
export class PeliculasComponent {

  movies: any[] = [];

  moviesSerie: MoviesSeries[] = [];

  movieResult: MoviesSeries[] = [];

  toSearch: string = '';

  filter: string = 'Movie';

  constructor(
    private _movieDBService: MovieDBService,
    private _firestoreService: FirestoreService
  ){}

  ngOnInit(){
    this.getAllMovies();
  }

  getAllMovies(){
    this._movieDBService.getMovies().subscribe({
      next: (response) => {
        this.movies = response.results;
        console.log('variable movies', this.movies);
      },
      error: (error) => {
        console.log('ERROR', error);
      },
      complete() {
        console.log('La ejecuión terminó');
      },
    })
  }

  addMovieToFirebase(id: number) {
    console.log('Pelicula para agregar', id);
    const auxiliar = this.movies.find((value) => value.id == id );
    const peliculaParaGuardar : Movie = {
      id_api: auxiliar.id,
      title: auxiliar.title,
      poster_path: auxiliar.poster_path,
      media_type: 'movie',
      vote_average: auxiliar.vote_average,
      name: auxiliar.name
    }
    !peliculaParaGuardar.name && delete peliculaParaGuardar.name;
    !peliculaParaGuardar.title && delete peliculaParaGuardar.title;
    this._firestoreService.addMovie(peliculaParaGuardar).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })

  }

  deleteMovieFromFirebase(id :number) {
    console.log('Película para eliminar', id);
    let auxResponseMovies: Movie[] = [];
    let peliculaEncontrada: Movie | undefined;
    this._firestoreService.getMovie().subscribe({
      next: (response) => {
        auxResponseMovies = response;
        console.log('RESPONSE', response);
        peliculaEncontrada = auxResponseMovies.find((value) => value.id_api === id);
        console.log('peliculaEncontrada', peliculaEncontrada);
        this._firestoreService.deleteMovie(peliculaEncontrada!.id!).then((response) => {
          console.log(response);
          }).catch((error) => {
          console.log(error);
        })
      }
    })
  }
}
