import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() series: MoviesSeries [] | undefined;
  @Input() filter: string | undefined;

  @Input() showButtons: boolean = false;
  @Input() estadoBoton: boolean = true;
  @Output() AddMovie = new EventEmitter<number>();
  @Output() DeleteMovie = new EventEmitter<number>();

  @Output() AddSerie = new EventEmitter<number>();
  @Output() DeleteSerie = new EventEmitter<number>();

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


