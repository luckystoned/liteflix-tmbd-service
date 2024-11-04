import { camelCase } from 'lodash';
import { GetTmdbMoviesResponse } from '../../../commons/interfaces/get-tmdb-movies.response.interface';
import { TmdbMovie } from '../../../commons/interfaces/tmdb-movie.interface';
import { GetMoviesResponse, Movie } from '../dto/get-movies-response.dto';

export class MovieHelper {
  static normalizeMovie(movie: TmdbMovie): Movie {
    return Object.keys(movie).reduce((normalizedMovie, key) => {
      normalizedMovie[camelCase(key)] = movie[key];

      return normalizedMovie;
    }, {} as Movie);
  }

  static normalizeMoviesFromResponse(
    response: GetTmdbMoviesResponse,
  ): GetMoviesResponse {
    return Object.keys(response).reduce((normalizedResponse, key) => {
      if (key === 'results') {
        normalizedResponse[camelCase(key)] = response[key].map((movie) =>
          MovieHelper.normalizeMovie(movie),
        );

        return normalizedResponse;
      }

      normalizedResponse[camelCase(key)] = response[key];

      return normalizedResponse;
    }, {} as GetMoviesResponse);
  }
}
