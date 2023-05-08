import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDetailDto } from './dto/createDetailDto';
import { DetailsService } from './details.service';

@Controller('details')
export class DetailsController {
    constructor( private detailService: DetailsService) {}

    @Post()
    create(@Body() dto: CreateDetailDto) {
        // console.log(dto.detailEng, dto.detail);
        return this.detailService.createDetail(dto);
    }

    @Get('/:name')
    getDetailByName(@Param('name') name: any ) {
        return this.detailService.getDetailByName( name );
    }

    @Get()
    getAll() {
        return this.detailService.getAllDetails();
    }
}
