import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSimilarDto } from './dto/createSimilarDto';
import { SimilarsService } from './similars.service';

@Controller('similars')
export class SimilarsController {
    constructor( private similarService: SimilarsService) {}

    @Post()
    async create(@Body() dto: CreateSimilarDto) {
        return await this.similarService.createSimilar(dto);
    }

    @Get('/:similarKinopoiskId')
    async getSimilarByKinopoiskId(@Param('similarKinopoiskId') similarKinopoiskId: number ) {
        return await this.similarService.getSimilarByKinopoiskId( similarKinopoiskId );
    }

    @Get()
    async getAllSimilars() {
        return await this.similarService.getAllSimilars();
    }

    @Get()
    async getMovieSimilars(kinopoiskId: number) {
        return await this.similarService.getMovieSimilars(kinopoiskId);
    }

}
