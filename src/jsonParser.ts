
export class MovieList {
  movieName: any;
  actorList = [];
  actorNames = [];

//   createMovieName(movieList: any) {
//     for (let i = 0; i < movieList.items.length; i++) {
//         this.actors.kinopoisIid = movieList.items[i].id;
//         this.actors.name = movieList.items[i].name;
//         this.actors.url = movieList.items[i].price;
//         this.actors[i] = this.movie;
//     }
//   }
    async createMovieName(movieList: any) {
        this.movieName = movieList.entityJSON.name;
        return this.movieName;
    }

    async createActorList(movieList: any) {
      this.actorList = movieList.entityJSON.actors;
      for (let i = 0; i < this.actorList.length; i++) {
        this.actorNames.push(this.actorList[i].name);
      }
      return this.actorNames;
  }

}
