import { CountriesController } from "./countries/countries.controller";
import { Country } from "./countries/countries.model";
import { CountriesService } from "./countries/countries.service";
import { DetailsController } from "./details/details.controller";
import { Detail } from "./details/details.model";
import { DetailsService } from "./details/details.service";
import { GenresController } from "./genres/genres.controller";
import { Genre } from "./genres/genres.model";
import { GenresService } from "./genres/genres.service";
import { MovieList } from "./jsonParser";
import { MoviesController } from "./movies/movies.controller";
import { Movie } from "./movies/movies.model";
import { MoviesService } from "./movies/movies.service";
import { PersonsController } from "./persons/persons.controller";
import { Person } from "./persons/persons.model";
import { PersonsService } from "./persons/persons.service";
import { ProfessionsController } from "./professions/professions.controller";
import { Profession } from "./professions/professions.model";
import { ProfessionsService } from "./professions/professions.service";

const countriesService = new CountriesService(Country);
const countriesController = new CountriesController(countriesService);

const detailsService = new DetailsService(Detail);
const detailsController = new DetailsController(detailsService);

const genresService = new GenresService(Genre);
const genresController = new GenresController(genresService);

const moviesService = new MoviesService(Movie);
const moviesController = new MoviesController(moviesService);

const professionsService = new ProfessionsService(Profession);
const professionsController = new ProfessionsController(professionsService);

const personsService = new PersonsService(Person, professionsService);
const personsController = new PersonsController(personsService);


export class LoaderToDatabase {

  constructor (private parsedData = new MovieList()) {}

  async putCountriesToDatabase() {
    try {
      for (let i = 0; i < this.parsedData.countryList.length; i++) {
        let country = this.parsedData.countryName[i];
        let countryId = Number(this.parsedData.countryId[i]);
        await countriesController.create({
          country, 
          countryId});
      }
    }catch (e) {
      console.log('The country already exists')
  }
}

  async putDetailsToDatabase() {
    try {
      for (let i = 0; i < this.parsedData.detailList.length; i++) {
        let name = this.parsedData.detailName[i];
        let value = this.parsedData.detailValue[i];
        await detailsController.create({
          name, 
          value});
      }
    }catch (e) {
      console.log('The detail already exists')
 }
}

async putProfessionsToDatabase() {
  try {
    for (let i = 0; i < this.parsedData.personOccupation.length; i++) {
      let profession = this.parsedData.personOccupation[i];
      await professionsController.create({ profession});
    }
  }catch (e) {
    console.log('The profession already exists')
}
}

  async putGenresToDatabase() {
    try {
      for (let i = 0; i < this.parsedData.genreList.length; i++) {
        let genreEng = this.parsedData.genreNameEng[i];
        let genre = this.parsedData.genreName[i];
        await genresController.create({ genreEng, genre });
      }
    }catch (e) {
      console.log('The genre already exists')
  }
}

async putPersonsToDatabase() {
  try {
    for (let i = 0; i < this.parsedData.personOccupation.length; i++) {
      let name = 'Имя ' + i;
      // let profession = this.parsedData.personOccupation[i];
      let link = '';
        for (let j = 0; j < this.parsedData.personId[i].length; j++) {
          let kinopoiskId = this.parsedData.personId[i][j];
          await personsController.create({
            kinopoiskId,
            name,
            // profession,
            link
          });
        }
    }
    for (let i = 0; i < this.parsedData.actorList.length; i++) {
      let kinopoiskId = this.parsedData.actorKinopoiskId[i];
      let name = this.parsedData.actorName[i];
      // let profession = 'Актер';
      let link = this.parsedData.actorLink[i];
      await personsController.create({
        kinopoiskId,
        name,
        // profession,
        link
      });
    }
  }catch (e) {
    console.log('The person already exists')
  }
 }

 async putSimilarMoviesToDatabase() {
  try {
    for (let i = 0; i < this.parsedData.similarList.length; i++) {
      let kinopoiskId = this.parsedData.similarKinopoiskId[i];
      let name = this.parsedData.similarName[i];
      let originalName = '';
      let description = '';
      let poster = '';
      let trailerLink = '';
      let year = null;
      let movieLength = '';
      let ageRating = '';
      let rate = '';
      await moviesController.create({
        kinopoiskId,
        name,  
        originalName,
        description,
        poster,
        trailerLink,
        year,
        movieLength,
        ageRating,
        rate
      });
    }
   
  } catch (e) {
    console.log('The movie already exists')
  }
}


  async putMoviesToDatabase() {
    try {
      let name = this.parsedData.movieName;
      let kinopoiskId = this.parsedData.movieKinopoiskId;
      let originalName = this.parsedData.movieOriginalName;
      let description = this.parsedData.movieDescription;
      let poster = this.parsedData.moviePoster;
      let trailerLink = this.parsedData.movieTrailerLink;
      let year = this.parsedData.movieYear;
      let movieLength = this.parsedData.movieLength;
      let ageRating = this.parsedData.movieAgeRating;
      let rate = this.parsedData.movieRate;
      await moviesController.create({
        kinopoiskId,
        name,  
        originalName,
        description,
        poster,
        trailerLink,
        year,
        movieLength,
        ageRating,
        rate
      });
    } catch (e) {
      console.log('The movie already exists')
    }
  }
}
