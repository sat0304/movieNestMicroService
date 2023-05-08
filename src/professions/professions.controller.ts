import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProfessionDto } from './dto/createProfessionDto';
import { ProfessionsService } from './professions.service';

@Controller('professions')
export class ProfessionsController {
    constructor( private professionService: ProfessionsService) {}

    @Post()
    create(@Body() dto: CreateProfessionDto) {
        return this.professionService.createProfession(dto);
    }

    @Get('/:profession')
    getByName(@Param('profession') profession: any ) {
        return this.professionService.getProfessionByName( profession );
    }

    @Get()
    getAll() {
        return this.professionService.getAllProfessions();
    }
}
