import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCountryDto } from './dto/createCountryDto';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
    constructor( private countryService: CountriesService) {}

    @Post()
    create(@Body() dto: CreateCountryDto) {
        return this.countryService.createCountry(dto);
    }

    @Get('/:countryId')
    getCountryById(@Param('countryId') countryId: number ) {
        return this.countryService.getCountryById( countryId );
    }

    @Get()
    getAll() {
        return this.countryService.getAllCountries();
    }
}
