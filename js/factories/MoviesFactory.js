class MoviesFactory {
  constructor(data, type) {
    if (type === "externalApi") {
      return new ExternalMovie(data);
    } else if (type === "newApi") {
      return new Movie(data);
    } else {
      throw "Unknow format type";
    }
  }
}
