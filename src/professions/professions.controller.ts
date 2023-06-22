import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProfessionDto } from './dto/createProfessionDto';
import { ProfessionsService } from './professions.service';

@Controller('professions')
export class ProfessionsController {
    constructor( private professionService: ProfessionsService) {}

    @Post()
    async create(@Body() dto: CreateProfessionDto) {
        return await this.professionService.createProfession(dto);
    }

    @Get('/:profession')
    async getByName(@Param('profession') profession: any ) {
        return await this.professionService.getProfessionByName( profession );
    }

    @Get()
    async getAll() {
        return await this.professionService.getAllProfessions();
    }
}
