import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/createPersonDto';

@Controller('persons')
export class PersonsController {
        
    constructor( private personService: PersonsService) {}

    @Post()
    async create(@Body() dto: CreatePersonDto, nameProfession: string) {
        return await this.personService.createPerson(dto, nameProfession);
    }

    @Get('/:kinopoiskId')
    async getByKinopoiskId(@Param('kinopoiskId') kinopoiskId: any  ) {
        return await this.personService.getPersonByKinopoiskId(kinopoiskId);
    }

    @Get()
    async getAllPersons() {
        return await this.personService.getAllPersons();
    }
}
