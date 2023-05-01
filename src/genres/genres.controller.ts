import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/createGenre';

@Controller('genres')
export class GenresController {

    constructor( private genreService: GenresService) {}

    @Post()
    create(@Body() dto: CreateGenreDto) {
        console.log(dto.enName, dto.description);
        return this.genreService.createGenre(dto);
    }

    @Get('/:value')
    getByValue(@Param('value') value: string  ) {
        return this.genreService.getGenreByValue( value );
    }

    @Get()
    getAll() {
        return this.genreService.getAllGenres();
    }
}
