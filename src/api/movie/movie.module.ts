import { Logger, Module } from '@nestjs/common';
import { TmdbModule } from '../../services/tmdb/tmdb.module';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [TmdbModule],
  controllers: [MovieController],
  providers: [MovieService, Logger],
})
export class MovieModule {}
