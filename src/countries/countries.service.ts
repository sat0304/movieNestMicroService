import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './countries.model';
import { CreateCountryDto } from './dto/createCountryDto';

@Injectable()
export class CountriesService {
    
    constructor(@InjectModel(Country) private countryRepo: typeof Country) {}

    async createCountry(dto: CreateCountryDto) {
        const country = await this.countryRepo.create(dto);
        return country;
    }

    async getCountryById( countryId: number ) {
        const country = await this.countryRepo.findOne({where: { countryId }});
        return country;
    }

    async getAllCountries() {
        const countries = await this.countryRepo.findAll();
        // const countries = await this.countryRepo.findAll({include: { all: true}});
        return countries;

    }
}
