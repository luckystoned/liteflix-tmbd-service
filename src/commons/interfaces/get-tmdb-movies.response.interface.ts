import { TmdbMovie } from './tmdb-movie.interface';

export interface GetTmdbMoviesResponse {
  results: TmdbMovie[];
  page: number;
  total_results: number;
  dates: {
    maximum: string;
    minimum: string;
  };
  total_pages: number;
}
