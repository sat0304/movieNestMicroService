import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/createGenreDto';

@Controller()
export class GenresController {
    [x: string]: any;

    constructor( private genreService: GenresService) {}

    @Post()
    create(@Body() dto: CreateGenreDto) {
        // console.log(dto.genreEng, dto.genre);
        return this.genreService.createGenre(dto);
    }

    @Get('/:nameEng')
    getByNameEng(@Param('nameEng') nameEng: any ) {
        return this.genreService.getGenreByNameEng( nameEng );
    }

    @Get()
    getAll() {
        return this.genreService.getAllGenres();
    }
}
