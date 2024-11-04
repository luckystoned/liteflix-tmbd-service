import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { GetMoviesQueryDto } from '../../commons/dto/get-movies-query.dto';
import { GetMoviesResponse, Movie } from './dto/get-movies-response.dto';
import { MovieService } from './movie.service';

@Controller('/movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/now-playing')
  @ApiOkResponse({
    description: 'Featured movie returned successfully',
    type: Movie,
  })
  getNowPlayingMovies(
    @Query() params: GetMoviesQueryDto,
  ): Observable<GetMoviesResponse> {
    return this.movieService.getNowPlayingMovies(params);
  }

  @Get('/popular')
  @ApiOkResponse({
    description: 'Popular movies returned successfully',
    type: GetMoviesResponse,
  })
  getPopularMovies(
    @Query() params: GetMoviesQueryDto,
  ): Observable<GetMoviesResponse> {
    return this.movieService.getPopularMovies(params);
  }
}
