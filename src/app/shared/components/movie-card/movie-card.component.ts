import { Component, Input } from '@angular/core';
import { MoviesSeries } from 'src/app/types/moviesSeries';

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

  calculatePercentaje(number: number) {
    return (number / 10) * 100;
  }
}


