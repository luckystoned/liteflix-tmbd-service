import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsString,
  IsOptional,
  IsBoolean,
  IsArray,
  IsInt,
  IsObject,
} from 'class-validator';

export class Movie {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly posterPath?: string | null;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  readonly adult?: boolean;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly overview?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly releaseDate?: string;

  @ApiPropertyOptional({ isArray: true, type: 'number' })
  @IsArray()
  @IsOptional()
  readonly genreIds?: number[];

  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  readonly id?: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly originalTitle?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly originalLanguage?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly title?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly backdropPath?: string | null;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  readonly popularity?: number;

  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  readonly voteCount?: number;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  readonly video?: boolean;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  readonly voteAverage?: number;
}

export class Dates {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly maximum?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly minimum?: string;
}

export class GetMoviesResponseDto {
  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  readonly page?: number;

  @ApiPropertyOptional({ isArray: true, type: Movie })
  @IsArray()
  @IsOptional()
  readonly results?: Movie[];

  @ApiPropertyOptional()
  @IsObject()
  @IsOptional()
  readonly dates?: Dates;

  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  readonly totalPages?: number;

  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  readonly totalResults?: number;
}
