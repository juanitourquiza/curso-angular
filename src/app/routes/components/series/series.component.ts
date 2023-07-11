import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MovieDBService } from 'src/app/services/movie-db.service';
import { Movie } from 'src/app/types/Movies';
import { MoviesSeries } from 'src/app/types/moviesSeries';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  series: any[] = [];
  moviesSerie: MoviesSeries[] = [];
  movieResult: MoviesSeries[] = [];
  toSearch: string = '';
  filter: string = 'Serie';

  constructor(
    private _movieDBService: MovieDBService,
    private _firestoreService: FirestoreService
  ){}

  ngOnInit(){
    this.getAllSeries();
  }

  getAllSeries(){
    this._movieDBService.getSeries().subscribe({
      next: (response) => {
        this.series = response.results;
        console.log('variable series', this.series);
      },
      error: (error) => {
        console.log('ERROR', error);
      },
      complete() {
        console.log('La ejecución terminó');
      },
    })
  }

  addSerieToFirebase(id: number) {
    console.log('Serie para agregar', id);
    const auxiliar = this.series.find((value) => value.id == id );
    const serieParaGuardar : Movie = {
      id_api: auxiliar.id,
      title: auxiliar.title,
      poster_path: auxiliar.poster_path,
      media_type: 'serie',
      vote_average: auxiliar.vote_average,
      name: auxiliar.name
    }
    !serieParaGuardar.name && delete serieParaGuardar.name;
    !serieParaGuardar.title && delete serieParaGuardar.title;
    this._firestoreService.addMovie(serieParaGuardar).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  deleteSerieFromFirebase(id :number) {
    console.log('Serie para eliminar', id);
    let auxResponseSeries: Movie[] = [];
    let serieEncontrada: Movie | undefined;
    this._firestoreService.getSerie().subscribe({
      next: (response) => {
        auxResponseSeries = response;
        console.log('RESPONSE', response);
        serieEncontrada = auxResponseSeries.find((value) => value.id_api === id);
        console.log('serieEncontrada', serieEncontrada);
        this._firestoreService.deleteMovie(serieEncontrada!.id!).then((response) => {
          console.log(response);
          }).catch((error) => {
          console.log(error);
        })
      }
    })
  }
}
