import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './countries.model';
import { CreateCountryDto } from './dto/createCountryDto';
import { Movie } from '../movies/movies.model';
import { Op } from 'sequelize';

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

    async getMovieCountries(kinopoiskId: number) {
        const countries = await this.countryRepo.findAll(
            {include: { 
                model: Movie, 
                as: 'movies',
                where: {
                    kinopoiskId: {
                    [Op.eq]: kinopoiskId
                    }
                }
            }
        });
        return countries;
    }
}
