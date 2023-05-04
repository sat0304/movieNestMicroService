import { GenresController } from "./genres/genres.controller";
import { Genre } from "./genres/genres.model";
import { GenresService } from "./genres/genres.service";

const genresService = new GenresService(Genre);
const genresController = new GenresController(genresService);

export class MovieList {
  movieName: any;
  movieOriginalName: any;
  movieDescription: any;
  
  actorList = [];
  actorName = [];
  actorLink = [];
  actorKinopoiskId = [];

  moviePoster: any;
  movieTrailerLink: any;
  movieYear: number;

  movieLength: any;
  movieAgeRating: any;

  genreList = [];
  genreName = [];
  genreNameEng = [];

  countryList = [];
  countryName = [];
  countryId = [];

  movieRate: any;

  detailList = [];
  detailName = [];
  detailValue = [];

  personOccupation = [];
  personId = [];

  similarList = [];
  similarName = [];
  similarUrl = [];
  similarKinopoiskId = [];

  movieKinopoiskId: any;


    async createMovieFeatures(movieList: any) {
        this.movieName = movieList.entityJSON.name;
        this.moviePoster = movieList.entityJSON.poster;
        this.movieOriginalName = movieList.entityJSON.originalName;
        this.movieDescription = movieList.entityJSON.description;
        this.movieTrailerLink = movieList.entityJSON.trailerLink;
        this.movieYear = movieList.entityJSON.year;
        this.movieLength = movieList.entityJSON.movieLength;
        this.movieAgeRating = movieList.entityJSON.ageRating;
        this.movieRate = movieList.entityJSON.rate.kinopoisk;
        this.movieKinopoiskId = movieList.entityJSON.kinopoiskId;
        return  (
          this.movieName,
          this.moviePoster,
          this.movieOriginalName,
          this.movieDescription, 
          this.movieTrailerLink,
          this.movieYear,
          this.movieLength,
          this.movieAgeRating,
          this.movieRate,
          this.movieKinopoiskId
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

  async putGenresTodatabase() {
    for (let i = 0; i < this.genreList.length; i++) {
      let genre = this.genreName[i];
      let genreEng = this.genreNameEng[i];
      await genresController.create({genre, genreEng});
  }
}
}
