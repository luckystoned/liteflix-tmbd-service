import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services/logger.service';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { GetMoviesQueryDto } from '../../commons/dto/get-movies-query.dto';
import { TmdbService } from '../../services/tmdb/tmdb.service';
import { GetMoviesResponse } from './dto/get-movies-response.dto';
import { MovieHelper } from './helpers/movie.helper';

@Injectable()
export class MovieService {
  constructor(
    private tmdbService: TmdbService,
    private readonly logger: Logger,
  ) {}

  getNowPlayingMovies(
    params?: GetMoviesQueryDto,
  ): Observable<GetMoviesResponse> {
    return this.tmdbService.getNowPlayingMoviess(params).pipe(
      map(MovieHelper.normalizeMoviesFromResponse),
      tap(() =>
        this.logger.log(
          'Now playing movies response has been normalized successfully',
        ),
      ),
      catchError((err) => {
        this.logger.error('There was an error normalizing now-playing movies');

        return throwError(() => err);
      }),
    );
  }

  getPopularMovies(params?: GetMoviesQueryDto): Observable<GetMoviesResponse> {
    return this.tmdbService.getPopularMovies(params).pipe(
      map(MovieHelper.normalizeMoviesFromResponse),
      tap(() =>
        this.logger.log(
          'Popular movies response has been normalized successfully',
        ),
      ),
      catchError((err) => {
        this.logger.error('There was an error normalizing popular movies');

        return throwError(() => err);
      }),
    );
  }
}
