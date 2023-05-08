import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/createGenreDto';

@Controller('genres')
export class GenresController {

    constructor( private genreService: GenresService) {}

    @Post()
    create(@Body() dto: CreateGenreDto) {
        // console.log(dto.genreEng, dto.genre);
        return this.genreService.createGenre(dto);
    }

    @Get('/:genreEng')
    getByName(@Param('genreEng') genreEng: any ) {
        return this.genreService.getGenreByName( genreEng );
    }

    @Get()
    getAll() {
        return this.genreService.getAllGenres();
    }
}
