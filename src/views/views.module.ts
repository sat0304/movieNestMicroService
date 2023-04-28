import { Module } from '@nestjs/common';
import { ViewsService } from './views.service';
import { View } from './views.model';
import { Movie } from '../movies/movies.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ViewsMovie } from '../movies/viewsMovie.model';

@Module({
  providers: [ViewsService],
  imports: [SequelizeModule.forFeature([Movie, View, ViewsMovie])]
})
export class ViewsModule {}
