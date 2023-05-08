import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from './genres.model';
import { CreateGenreDto } from './dto/createGenreDto';

@Injectable()
export class GenresService {

    constructor(@InjectModel(Genre) private genreRepo: typeof Genre) {}

    async createGenre(dto: CreateGenreDto) {
        const genre = await this.genreRepo.create(dto);
        return genre;
    }

    async getGenreByName( genreEng: any ) {
        const genre = await this.genreRepo.findOne({where: { genreEng }});
        return genre;
    }

    async getAllGenres() {
        const genres = await this.genreRepo.findAll();
        // const genres = await this.genreRepo.findAll({include: { all: true}});
        return genres;

    }
}
