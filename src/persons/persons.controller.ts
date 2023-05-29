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

    @Get('/:personKinopoiskId')
    async getByKinopoiskId(@Param('personKinopoiskIdd') personKinopoiskId: number  ) {
        return await this.personService.getPersonByKinopoiskId(personKinopoiskId);
    }

    @Get()
    async getAllPersons() {
        return await this.personService.getAllPersons();
    }

    @Get()
    async getAllActors() {
        return await this.personService.getAllActors();
    }
}
