import { Injectable, Logger } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { GetMoviesQueryDto } from '../../commons/dto/get-movies-query.dto';
import { GetTmdbMoviesResponse } from '../../commons/interfaces/get-tmdb-movies.response.interface';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TmdbService {
  constructor(private httpService: HttpService, private logger: Logger) {}

  getNowPlayingMoviess(
    params?: GetMoviesQueryDto,
  ): Observable<GetTmdbMoviesResponse> {
    return this.httpService
      .get<GetTmdbMoviesResponse>('/movie/now_playing', { params })
      .pipe(
        map((response) => response.data),
        tap(() => this.logger.log('Now-playing movies returned successfully')),
        catchError((err) => {
          this.logger.error('There was an error getting now-playing movies');

          return throwError(() => err);
        }),
      );
  }

  getPopularMovies(
    params?: GetMoviesQueryDto,
  ): Observable<GetTmdbMoviesResponse> {
    return this.httpService
      .get<GetTmdbMoviesResponse>('/movie/popular', { params })
      .pipe(
        map((response) => response.data),
        tap(() => this.logger.log('Popular movies returned successfully')),
        catchError((err) => {
          this.logger.error('There was an error getting popular movies');

          return throwError(() => err);
        }),
      );
  }
}
