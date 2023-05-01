import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from './genres.model';
import { CreateGenreDto } from './dto/createGenre';

@Injectable()
export class GenresService {

    constructor(@InjectModel(Genre) private genreRepo: typeof Genre) {}

    async createGenre(dto: CreateGenreDto) {
        const genre = await this.genreRepo.create(dto);
        return genre;
    }

    async getGenreByValue( value: string ) {
        const genre = await this.genreRepo.findOne({where: { value }});
        return genre;
    }

    async getAllGenres() {
        const genres = await this.genreRepo.findAll();
        // const genres = await this.genreRepo.findAll({include: { all: true}});
        return genres;

    }
}
