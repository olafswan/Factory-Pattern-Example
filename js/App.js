class App {
  constructor() {
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
    this.oldMoviesApi = new MovieApi("/data/old-movie-data.json");
    this.newMoviesApi = new MovieApi("/data/new-movie-data.json");
  }

  async main() {
    const oldMoviesData = await this.oldMoviesApi.getMovies();

    console.log(
      "1 \n file: App.js:11 \n App \n main \n oldMoviesData\n",
      oldMoviesData
    );

    const newMoviesData = await this.newMoviesApi.getMovies();

    console.log(
      "2 \n file: App.js:15 \n App \n main \n newMoviesData\n",
      newMoviesData
    );

    const OldMovies = oldMoviesData.map(
      (movie) => new MoviesFactory(movie, "oldApi")
    );

    console.log(
      "3 \n file: App.js:17 \n App \n main \n OldMovies\n",
      OldMovies
    );

    const NewMovies = newMoviesData.map(
      (movie) => new MoviesFactory(movie, "newApi")
    );

    console.log(
      "4 \n file: App.js:23 \n App \n main \n NewMovies\n",
      NewMovies
    );

    const FullMovies = OldMovies.concat(NewMovies);

    console.log(
      "🚀 \n file: App.js:22 \n App \n main \n FullMovies\n",
      FullMovies
    );

    FullMovies.forEach((movie) => {
      const Template = new MovieCard(movie);
      this.$moviesWrapper.appendChild(Template.createMovieCard());
    });
  }
}

const app = new App();
app.main();
