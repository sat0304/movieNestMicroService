import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/createGenre';

@Controller('genres')
export class GenresController {

    constructor( private genreService: GenresService) {}

    @Post()
    create(@Body() dto: CreateGenreDto) {
        return this.genreService.createGenre(dto);
    }

    @Get('/:value')
    getByValue(@Param('value') value: string  ) {
        return this.genreService.getGenreByValue( value );
    }
}
