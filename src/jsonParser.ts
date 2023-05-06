import { GenresController } from "./genres/genres.controller";
import { Genre } from "./genres/genres.model";
import { GenresService } from "./genres/genres.service";
import { MoviesController } from "./movies/movies.controller";
import { Movie } from "./movies/movies.model";
import { MoviesService } from "./movies/movies.service";
import { PersonsController } from "./persons/persons.controller";
import { Person } from "./persons/persons.model";
import { PersonsService } from "./persons/persons.service";

const genresService = new GenresService(Genre);
const genresController = new GenresController(genresService);

const moviesService = new MoviesService(Movie);
const moviesController = new MoviesController(moviesService);

const personsService = new PersonsService(Person);
const personsController = new PersonsController(personsService);

export class MovieList {
  movieKinopoiskId: number;
  movieName: any;
  movieOriginalName: any;
  movieDescription: any;
  moviePoster: any;
  movieTrailerLink: any;
  movieYear: number;
  movieLength: any;
  movieAgeRating: any;
  movieRate: any;
  
  actorList = [];
  actorName = [];
  actorLink = [];
  actorKinopoiskId = [];

  genreList = [];
  genreName = [];
  genreNameEng = [];

  countryList = [];
  countryName = [];
  countryId = [];

  detailList = [];
  detailName = [];
  detailValue = [];

  personOccupation = [];
  personId = [];

  similarList = [];
  similarName = [];
  similarUrl = [];
  similarKinopoiskId = [];


    async createMovieFeatures(movieList: any) {
        this.movieKinopoiskId = Number(movieList.entityJSON.kinopoiskId);
        this.movieName = movieList.entityJSON.name;
        this.movieOriginalName = movieList.entityJSON.originalName;
        this.movieDescription = movieList.entityJSON.description;
        this.moviePoster = movieList.entityJSON.poster;
        this.movieTrailerLink = movieList.entityJSON.trailerLink;
        this.movieYear = Number(movieList.entityJSON.year);
        this.movieLength = movieList.entityJSON.movieLength;
        this.movieAgeRating = movieList.entityJSON.ageRating;
        this.movieRate = movieList.entityJSON.rate.kinopoisk;
        return  (
          this.movieKinopoiskId,
          this.movieName,
          this.movieOriginalName,
          this.movieDescription,
          this.moviePoster,
          this.movieTrailerLink,
          this.movieYear,
          this.movieLength,
          this.movieAgeRating,
          this.movieRate
          );
    }

    async createActorList(movieList: any) {
      this.actorList = movieList.entityJSON.actors;
      for (let i = 0; i < this.actorList.length; i++) {
        this.actorName.push(this.actorList[i].name);
        this.actorLink.push(this.actorList[i].link);
        this.actorKinopoiskId.push(this.actorList[i].kinopoiskId);
      }
      return (this.actorName, this.actorLink, this.actorKinopoiskId);
  }

  async createGenreList(movieList: any) {
    this.genreList = movieList.entityJSON.genres;
    for (let i = 0; i < this.genreList.length; i++) {
      this.genreName.push(this.genreList[i].genre);
      this.genreNameEng.push(this.genreList[i].genreEng);
      
    }
    return (this.genreName, this.genreNameEng);
}


async createCountryList(movieList: any) {
  this.countryList = movieList.entityJSON.countries;
  for (let i = 0; i < this.countryList.length; i++) {
    this.countryName.push(this.countryList[i].country);
    this.countryId.push(this.countryList[i].countryId);
    
  }
  return (this.countryName, this.countryId);
}

  async createDetailList(movieList: any) {
    this.detailList = movieList.entityJSON.encyclopedia;
    for (let i = 0; i < this.detailList.length; i++) {
      if (this.detailList[i].type == 'details') {
        this.detailName.push(this.detailList[i].name);
        this.detailValue.push(this.detailList[i].value);
      } else {
        this.personOccupation.push(this.detailList[i].name);
        this.personId.push(this.detailList[i].value);
      }
    }
    return (
      this.detailName,
      this.detailValue,
      this.personOccupation,
      this.personId);
  }

  async createSimilarList(movieList: any) {
    this.similarList = movieList.entityJSON.simularFilms;
    for (let i = 0; i < this.similarList.length; i++) {
      this.similarName.push(this.similarList[i].name);
      this.similarUrl.push(this.similarList[i].url);
      this.similarKinopoiskId.push(this.similarList[i].kinopoiskId);
    }
    return (this.similarName, this.similarUrl, this.similarKinopoiskId);
}

  async putGenresToDatabase() {
    try {
      for (let i = 0; i < this.genreList.length; i++) {
        let genre = this.genreName[i];
        let genreEng = this.genreNameEng[i];
        await genresController.create({genre, genreEng});
      }
    }catch (e) {
      console.log('The genre already exists')
  }
}

  async putMoviesToDatabase() {
    try {
      let name = this.movieName;
      let kinopoiskId = this.movieKinopoiskId;
      let originalName = this.movieOriginalName;
      let description = this.movieDescription;
      let poster = this.moviePoster;
      let trailerLink = this.movieTrailerLink;
      let year = this.movieYear;
      let movieLength = this.movieLength;
      let ageRating = this.movieAgeRating;
      let rate = this.movieRate;
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

  async putActorToDatabase() {
    try {
      for (let i = 0; i < this.actorList.length; i++) {
        let kinopoiskId = this.actorKinopoiskId[i];
        let name = this.actorName[i];
        let link = this.actorLink[i];
        let occupationFirst = 'актер';
        let occupationFirstEng = 'actor';
        // let occupationSecond = '';
        // let occupationSecondEng = '';
        await personsController.create({
          kinopoiskId,
          name,
          // nameEng,
          occupationFirst,
          occupationFirstEng,
          // occupationSecond,
          // occupationSecondEng,
          link
        });
      }
    }catch (e) {
      console.log('The actor already exists')
  }
}

}
