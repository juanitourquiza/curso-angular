import { Component } from '@angular/core';
import { MoviesSeries } from 'src/app/types/moviesSeries';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //textoEnPadre = 'Esto es un texto desde el componente padre';
  moviesSerie: MoviesSeries [] = [
    {
      id: 1,
      name: 'The Flash',
      description: 'When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      rating: '74%',
      category: 'Movie',
    },
    {
      id: 2,
      name: 'Black Mirror',
      description: 'A contemporary British re-working of The Twilight Zone with stories that tap into the collective unease about our modern world.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg',
      rating: '83%',
      category: 'Serie',
    },
    {
      id: 3,
      name: 'Spider-Man',
      description: 'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      rating: '87%',
      category: 'Movie',
    },
    {
      id: 4,
      name: 'South Park',
      description: 'Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iiCY2QIGSnmtVkIdjkKAfwDs0KF.jpg',
      rating: '84%',
      category: 'Serie',
    },
    {
      id: 5,
      name: 'South Park',
      description: 'Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iiCY2QIGSnmtVkIdjkKAfwDs0KF.jpg',
      rating: '84%',
      category: 'Serie',
    },
    {
      id: 6,
      name: 'Spider-Man',
      description: 'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      rating: '87%',
      category: 'Movie',
    },
    {
      id: 7,
      name: 'Black Mirror',
      description: 'A contemporary British re-working of The Twilight Zone with stories that tap into the collective unease about our modern world.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg',
      rating: '83%',
      category: 'Serie',
    },
    {
      id: 8,
      name: 'The Flash',
      description: 'When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      rating: '74%',
      category: 'Movie',
    }
  ];
}
