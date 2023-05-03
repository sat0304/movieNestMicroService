
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
        return  (
          this.movieName,
          this.moviePoster,
          this.movieOriginalName,
          this.movieDescription, 
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
}
