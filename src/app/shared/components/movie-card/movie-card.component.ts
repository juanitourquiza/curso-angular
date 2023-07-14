import { Component, Input, Output, EventEmitter, SimpleChanges, AfterViewInit } from '@angular/core';
import { MoviesSeries } from 'src/app/types/moviesSeries';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() data: MoviesSeries [] | undefined;
  @Input() movies: MoviesSeries [] | undefined;
  @Input() moviesFirestore: MoviesSeries [] | undefined;
  @Input() series: MoviesSeries [] | undefined;
  @Input() filter: string | undefined;

  @Input() showButtons: boolean = false;
  @Input() estadoBoton: boolean = true;
  @Output() AddMovie = new EventEmitter<number>();
  @Output() DeleteMovie = new EventEmitter<number>();

  @Output() AddSerie = new EventEmitter<number>();
  @Output() DeleteSerie = new EventEmitter<number>();

  private inputsReady = false;
coincidencias: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movies'] || changes['moviesFirestore']) {
      if (this.movies !== undefined && this.moviesFirestore !== undefined) {
        this.inputsReady = true;
        this.coincidencias = this.utilizarInputs();
      }
    }
  }

  utilizarInputs() {
    if (!this.inputsReady) {
      return;
    }
    // Hacer algo con los valores de los inputs
    console.log(this.movies, this.moviesFirestore);

    let coincidencias1 = this.movies?.map((obj1) => {
      const obj2 = this.moviesFirestore?.find((obj) => obj.id_api === obj1.id);
      if (obj2) {
        return { ...obj1, status: true };
      } else {
        return obj1;
      }
    });

    // Realizar acciones con las coincidencias encontradas
    console.log(coincidencias1);
    return coincidencias1;
  }


  calculatePercentaje(number: number) {
    return (number / 10) * 100;
  }

  addMovie(number: number) {
    this.AddMovie.emit(number);
  }

  deleteMovie(number: number) {
    this.DeleteMovie.emit(number);
  }

  addSerie(number: number) {
    this.AddSerie.emit(number);
  }

  deleteSerie(number: number) {
    this.DeleteSerie.emit(number);
  }


}
