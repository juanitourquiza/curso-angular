export interface MoviesSeries {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  category: 'Movie' | 'Serie';
  title: string;
}
