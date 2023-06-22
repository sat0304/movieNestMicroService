import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDetailDto } from './dto/createDetailDto';
import { DetailsService } from './details.service';

@Controller('details')
export class DetailsController {
    constructor( private detailService: DetailsService) {}

    @Post()
    async create(@Body() dto: CreateDetailDto) {
        // console.log(dto.detailEng, dto.detail);
        return await this.detailService.createDetail(dto);
    }

    @Get('/:name')
    async getDetailByName(@Param('name') name: any ) {
        return await this.detailService.getDetailByName( name );
    }

    @Get()
    async getAll() {
        return await this.detailService.getAllDetails();
    }

    @Get()
    async getMovieDetails(kinopoiskId: number) {
        return await this.detailService.getMovieDetails(kinopoiskId);
    }
}
