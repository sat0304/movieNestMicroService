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
import { SimilarsController } from "./similars/similars.controller";
import { Similar } from "./similars/similars.model";
import { SimilarsService } from "./similars/similars.service";

const professionsService = new ProfessionsService(Profession);
const professionsController = new ProfessionsController(professionsService);

const personsService = new PersonsService(Person, professionsService);
const personsController = new PersonsController(personsService);

const countriesService = new CountriesService(Country);
const countriesController = new CountriesController(countriesService);

const detailsService = new DetailsService(Detail);
const detailsController = new DetailsController(detailsService);

const genresService = new GenresService(Genre);
const genresController = new GenresController(genresService);

const similarsService = new SimilarsService(Similar);
const similarsController = new SimilarsController(similarsService);

const moviesService = new MoviesService(
  Movie,
  personsService,
  countriesService,
  genresService,
  detailsService,
  similarsService);
const moviesController = new MoviesController(moviesService);

export class LoaderToDatabase {

  constructor (private parsedData = new MovieList()) {}

  async putCountriesToDatabase() {
    try {
      for (let i = 0; i < this.parsedData.countryList.length; i++) {
        let country = this.parsedData.countryName[i];
        let countryId = Number(this.parsedData.countryIds[i]);
        await countriesController.create({
          country, 
          countryId});
      }
    }catch (e) {
      console.log('The country already exists', 90001);
  }
}

  async putDetailsToDatabase() {
    try {
      const movieKinopoiskId = this.parsedData.movieKinopoiskId;
      for (let i = 0; i < this.parsedData.detailName.length; i++) {
        let name = this.parsedData.detailName[i];
        let value = this.parsedData.detailValue[i];
        await detailsController.create({
          name,
          value,
          movieKinopoiskId
        });
      }
    }catch (e) {
      console.log('The detail already exists', 90002);
 }
}

async putProfessionsToDatabase() {
  try {
    for (let i = 0; i < this.parsedData.personOccupation.length; i++) {
      let profession = this.parsedData.personOccupation[i];
      await professionsController.create({ profession});
    }
  }catch (e) {
    console.log('The profession already exists', 90003);
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
      console.log('The genre already exists', 90004);
  }
}

async putPersonsToDatabase() {
  try {
    for (let i = 0; i < this.parsedData.personOccupation.length; i++) {
      let name = '';
      let link = '';
        for (let j = 0; j < this.parsedData.personIds[i].length; j++) {
          let personKinopoiskId = this.parsedData.personIds[i][j];
          await personsController.create({
            personKinopoiskId,
            name,
            link
          },
          this.parsedData.personOccupation[i]);
        }
    }
    for (let i = 0; i < this.parsedData.actorList.length; i++) {
      let personKinopoiskId = this.parsedData.actorKinopoiskIds[i];
      let name = this.parsedData.actorName[i];
      let link = this.parsedData.actorLink[i];
      await personsController.create({
        personKinopoiskId,
        name,
        link
      }, 'Актер');
    }
  }catch (e) {
    console.log('The person already exists', 90005);
  }
 }

 async putSimilarMoviesToDatabase() {
  try {
    for (let i = 0; i < this.parsedData.similarList.length; i++) {
      let similarKinopoiskId = this.parsedData.similarKinopoiskId[i];
      let movieName = this.parsedData.similarName[i];
      let url = this.parsedData.similarUrl[i];
      await similarsController.create({
        similarKinopoiskId,
        movieName,  
        url
      });
    }
  } catch (e) {
    console.log('The similar movie already exists', 90006 );
  }
}


  async putMoviesToDatabase() {
    try {
      let movieName = this.parsedData.movieName;
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
        movieName,  
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
      console.log('The movie already exists', 90007);
    }
  }

  async updateActorsToMovie() {
    try {
      await moviesController.updateActor
      (
        this.parsedData.movieKinopoiskId,
        this.parsedData.actorKinopoiskIds,
      );
      
    }catch (e) {
      console.log('The actor is updated already', 100001);
    }
   }

   async updatePersonsToMovie() {
    try {
      const personKinopoiskIds = [];
      for (let i = 0; i < this.parsedData.personIds.length; i++){
          for (let j = 0; j < this.parsedData.personIds[i].length; j++) {
            personKinopoiskIds.push(this.parsedData.personIds[i][j]);
          };
        };
      await moviesController.updatePerson(
        this.parsedData.movieKinopoiskId,
        personKinopoiskIds,
      );
        
    }catch (e) {
      console.log('The person is updated already', 100002);
    }
   } 

   async updateCountriesToMovie() {
    try {
      const countryIds = [];
      for (let i = 0; i < this.parsedData.countryIds.length; i++){
        countryIds.push(this.parsedData.countryIds[i]);
        };
      await moviesController.updateCountry(
        this.parsedData.movieKinopoiskId,
        countryIds,
      );
        
    }catch (e) {
      console.log('The country is updated already', 100003);
    }
   }

   async updateGenresToMovie() {
    try {
      const genres = [];
      for (let i = 0; i < this.parsedData.genreNameEng.length; i++){
        genres.push(this.parsedData.genreNameEng[i]);
        };
      await moviesController.updateGenre(
        this.parsedData.movieKinopoiskId,
        genres,
      );
        
    }catch (e) {
      console.log('The genre is updated already', 100004);
    }
  }

  async updateDetailsToMovie() {
    try {
      const details = [];
      for (let i = 0; i < this.parsedData.detailName.length; i++){
        details.push(this.parsedData.detailName[i]);
        };
      await moviesController.updateDetail(
        this.parsedData.movieKinopoiskId,
        details,
      );
        
    }catch (e) {
      console.log('The detail is updated already', 100005);
    }
  }

  async updateSimilarMovie() {
    try {
      const similarMovies = [];
      for (let i = 0; i < this.parsedData.similarKinopoiskId.length; i++){
          similarMovies.push(this.parsedData.similarKinopoiskId[i]);
        };
      await moviesController.updateSimilar(
        this.parsedData.movieKinopoiskId,
        similarMovies,
      );
        
    }catch (e) {
      console.log('The similar movie is updated already', 100006);
    }
  }
}
