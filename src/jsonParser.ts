
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
  actorKinopoiskIds = [];

  genreList = [];
  genreName = [];
  genreNameEng = [];

  countryList = [];
  countryName = [];
  countryIds = [];

  detailList = [];
  detailName = [];
  detailValue = [];

  personOccupation = [];
  personIds = [];

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
    this.countryIds.push(this.countryList[i].countryId);
    
  }
  return (this.countryName, this.countryIds);
}

  async createDetailList(movieList: any) {
    this.detailList = movieList.entityJSON.encyclopedia;
    for (let i = 0; i < this.detailList.length; i++) {
      if (this.detailList[i].type == 'details') {
        this.detailName.push(
          this.detailList[i].name  + ' ' + this.movieKinopoiskId);
        this.detailValue.push(this.detailList[i].value);
      } else {
        this.personOccupation.push(this.detailList[i].name);
        this.personIds.push(this.detailList[i].value);
      }
    }
    return (
      this.detailName,
      this.detailValue,
      this.personOccupation,
      this.personIds);
  }

  async createActorList(movieList: any) {
    this.actorList = movieList.entityJSON.actors;
    for (let i = 0; i < this.actorList.length; i++) {
      this.actorName.push(this.actorList[i].name);
      this.actorLink.push(this.actorList[i].link);
      this.actorKinopoiskIds.push(this.actorList[i].kinopoiskId);
      this.personOccupation.push('Актер');
      this.personIds.push(Number(this.actorList[i].kinopoiskId));

    }
    return (
      this.actorName, 
      this.actorLink, 
      this.actorKinopoiskIds);
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
}
