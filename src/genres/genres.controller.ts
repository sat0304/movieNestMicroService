import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/createGenreDto';

@Controller('genres')
export class GenresController {

    constructor( private genreService: GenresService) {}

    @Post()
    async create(@Body() dto: CreateGenreDto) {
        // console.log(dto.genreEng, dto.genre);
        return await this.genreService.createGenre(dto);
    }

    @Get('/:genreEng')
    async getByName(@Param('genreEng') genreEng: any ) {
        return await this.genreService.getGenreByName( genreEng );
    }

    @Get()
    async getAll() {
        return await this.genreService.getAllGenres();
    }
}
