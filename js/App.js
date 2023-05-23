class App {
  constructor() {
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
    this.externalMoviesApi = new MovieApi("/data/external-movie-data.json");
    this.newMoviesApi = new MovieApi("/data/new-movie-data.json");
  }

  async main() {
    const externalMoviesData = await this.externalMoviesApi.getMovies();

    const newMoviesData = await this.newMoviesApi.getMovies();

    const ExternalMovies = externalMoviesData.map(
      (movie) => new MoviesFactory(movie, "externalApi")
    );

    const NewMovies = newMoviesData.map(
      (movie) => new MoviesFactory(movie, "newApi")
    );

    const FullMovies = ExternalMovies.concat(NewMovies);

    FullMovies.forEach((movie) => {
      const Template = new MovieCard(movie);
      this.$moviesWrapper.appendChild(Template.createMovieCard());
    });
  }
}

const app = new App();
app.main();
