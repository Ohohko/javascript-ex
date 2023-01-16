function getMovieData(movies) {
  var movieData = [];
  movies.forEach(function(movie) {
    movieData.push({id: movie.id, name: movie.name});
  });
  return movieData;
}
function getMovieData(movies) {
  return movies.map(function(movie) {
    return {id: movie.id, name: movie.name};
  });
}


// You are getting an array of objects of the recent video releases
// from your database. (array below). We only care about the
// portion of data we are getting.
// 1. Create a function that will loop over the array with the
// forEach method. Return from the function an array of
// objects. Each object will contain the id and name of the
// specific movie.
// 2. Create another function that will do the same thing except
// now use the map method