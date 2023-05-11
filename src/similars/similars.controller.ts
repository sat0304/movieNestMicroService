import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSimilarDto } from './dto/createSimilarDto';
import { SimilarsService } from './similars.service';

@Controller('similars')
export class SimilarsController {
    constructor( private similarService: SimilarsService) {}

    @Post()
    create(@Body() dto: CreateSimilarDto) {
        return this.similarService.createSimilar(dto);
    }

    @Get('/:similarKinopoiskId')
    getSimilarByKinopoiskId(@Param('similarKinopoiskId') similarKinopoiskId: number ) {
        return this.similarService.getSimilarByKinopoiskId( similarKinopoiskId );
    }

    @Get()
    getAllSimilars() {
        return this.similarService.getAllSimilars();
    }
}
