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
import { LoaderToDatabase } from "./putterToDatabase";
import rabbitClient from "./rabbitMQ/client";

const movieList = new MovieList();
const loaderToDatabase = new LoaderToDatabase(movieList);

const professionsService = new ProfessionsService(Profession);
const professionsController = new ProfessionsController(professionsService);

const countriesService = new CountriesService(Country);
const countriesController = new CountriesController(countriesService);

const detailsService = new DetailsService(Detail);
const detailsController = new DetailsController(detailsService);

const genresService = new GenresService(Genre);
const genresController = new GenresController(genresService);

const personsService = new PersonsService(Person, professionsService);
const personsController = new PersonsController(personsService);

const moviesService = new MoviesService(
  Movie,
  personsService,
  countriesService);
const moviesController = new MoviesController(moviesService);

export default class MessageHandler{

  static async handle(
    routingKey: string,
    data: any,
    correlationId: string,
    replyTo: string,
    ) 
  {
        
    let response = {};

    switch (routingKey) {
    case 'getCountries':
      response = await countriesController.getAll();
      break;
    case 'getCountry':
      const {countryId} = data;
      response = await countriesController.getCountryById(countryId);
      break;
    case 'getDetails':
      response = await detailsController.getAll();
      break;
    case 'getDetail':
      const {name} = data;
      response = await detailsController.getDetailByName(name);
      break;
    case 'getGenres':
      response = await genresController.getAll();
      break;
    case 'getGenre':
      const {genreEng} = data;
      response = await genresController.getByName(genreEng);
      break;
    case 'getMovies':
      response = await moviesController.getAllMovies();
      break;
    case 'getMovie':
      let {kinopoiskId} = data;
      response = await moviesController.getByKinopoiskId(kinopoiskId);
      break;
    case 'getPersons':
      response = await personsController.getAllPersons();
      break;
    case 'getPerson':
      const {personKinopoiskId} = data;
      response = await personsController.getByKinopoiskId(personKinopoiskId);
      break;
    case 'getProfessions':
      response = await professionsController.getAll();
      break;
    case 'getProfession':
      const {profession} = data;
      response = await professionsController.getByName(profession);
      break;
    case 'postMovie': 
      await movieList.createMovieFeatures(data);
      await movieList.createGenreList(data);
      await movieList.createDetailList(data);
      await movieList.createCountryList(data);
      await movieList.createActorList(data);
      await movieList.createSimilarList(data);

      await loaderToDatabase.putCountriesToDatabase();
      await loaderToDatabase.putDetailsToDatabase();
      await loaderToDatabase.putProfessionsToDatabase();
      await loaderToDatabase.putGenresToDatabase();
      await loaderToDatabase.putPersonsToDatabase();
      await loaderToDatabase.putSimilarMoviesToDatabase();
      await loaderToDatabase.putMoviesToDatabase();
      await loaderToDatabase.updatePersonsToMovie();
      await loaderToDatabase.updateActorsToMovie();
      await loaderToDatabase.updateCountriesToMovie();

      response = 'The new movie was created';
      break;
    default: response = 0;
      break;
      };
    
    await rabbitClient.produce(response, correlationId, replyTo);
  }
}