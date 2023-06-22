import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCountryDto } from './dto/createCountryDto';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
    constructor( private countryService: CountriesService) {}

    @Post()
    async create(@Body() dto: CreateCountryDto) {
        return await this.countryService.createCountry(dto);
    }

    @Get('/:countryId')
    async getCountryById(@Param('countryId') countryId: number ) {
        return await this.countryService.getCountryById( countryId );
    }

    @Get()
    async getAll() {
        return await this.countryService.getAllCountries();
    }

    @Get()
    async getMovieCountries(kinopoiskId: number) {
        return await this.countryService.getMovieCountries(kinopoiskId);
    }
}
