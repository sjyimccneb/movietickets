"use strict";

function Movie(title, newRelease, times, score, rating, director, actors) {
  this.title = title;
  this.newRelease = newRelease;
  this.times = times;
  this.score = score;
  this.rating = rating;
  this.director = director;
  this.actors = actors;

};

Movie.prototype.allActors = function() {
  return this.actors.join(", ");
};

function Ticket(movie, newRelease, time, age, threeD) {
  this.movie = movie;
  this.newRelease = newRelease;
  this.time = time;
  this.age = age;
  this.threeD = threeD;
};

Ticket.prototype.price = function() {
  var basePrice = 7.5;
  var newFee = 2;
  var threeDFee = 3;
  var childDiscount = 3;
  var seniorDiscount = 5;
  var matineeDiscount = 0.50;

  if (this.newRelease) {
    basePrice += newFee;
  };

  if (this.threeD) {
    basePrice += threeDFee;
  };

  if (this.age == "child") {
    basePrice -= childDiscount;
  } else if (this.age == "senior") {
    basePrice -= seniorDiscount;
  };

  if (this.time < "15:00") {
    basePrice *= matineeDiscount;
  };

  return "$" + basePrice;
};

var seedMovies = function () {
  var madMax = new Movie("Mad Max: Fury Road", false, ["10:30", "13:00", "15:30", "18:00", "20:30"], 8.3, "R", "George Miller", ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]);

  var movie2 = new Movie("movie 2", false, ["4:20", "10:27", "13:04", "15:39", "18:12", "20:31"], 2.2, "NC-17", "Prince Billy Price", ["Tom Brady", "World", "The Queen of Wales"]);

  var fastAndFurious95 = new Movie("The Fast and The Furious: We Need to Buy a New Stereo From Radioshack", true, ["10:30", "13:00", "15:30", "18:00", "20:30"], 0.1, "G", "Tricky", ["Lyndon Johnson", "Jacqueline Onassis", "Arlene Schnitzer"]);

  var movies = [madMax, movie2, fastAndFurious95];
  return movies;
};

$(document).ready(function() {
  var movies = seedMovies();

// Populate movie selection dropdown with movie titles from movies
// array, and assign them an index value for later reference.

  movies.forEach(function(movie, i) {
    $('#movie-input').append(
      "<option value='" + i + "'>" + movie.title + "</option>"
    );
  });

// Populate input fields with values for first movie in the movies
// array on site load.

  movies[0].times.forEach(function(time) {
    $('#times-input').append(
      "<label for='time'>" + time + "</label>" +
      "<input type='radio' name='time' value='" + time + "'>");
  });

  $('#age-input').append(
    "<label for='age'>adult</label>" +
    "<input type='radio' name='age' value='adult'>" +

    "<label for='age'>senior</label>" +
    "<input type='radio' name='age' value='senior'>"
  );

  if (movies[0].rating == "G" || movies[0].rating == "PG") {
    $('#age-input').append(
      "<label for='age'>child</label>" +
      "<input type='radio' name='age' value='child'>"
    );
  }

// Change site content based on what movie is selected.

  $('#movie-input').change(function() {
    var movieIndex = parseInt($('#movie-input').val());

// Wipe current information from price and input divs.

    $('#times-input').children().remove();
    $('#age-input').children().remove();
    $('#three-d-input').children().remove();
    $('#price').children().remove();

// Creates a radio button for each viewing time available.

    movies[movieIndex].times.forEach(function(time) {
      $('#times-input').append(
        "<label for='time'>" + time + "</label>" +
        "<input type='radio' name='time' value='" + time + "'>");
    });

// Creates a radio button for adult and senior tickets.

    $('#age-input').append(
      "<label for='age'>adult</label>" +
      "<input type='radio' name='age' value='adult'>" +

      "<label for='age'>senior</label>" +
      "<input type='radio' name='age' value='senior'>"
    );

// Creates a radio button for a child ticket if the movie is rated
// appropriately for children.

    if (movies[movieIndex].rating == "G" || movies[movieIndex].rating == "PG") {
      $('#age-input').append(
        "<label for='age'>child</label>" +
        "<input type='radio' name='age' value='child'>"
      );
    }
  });

  // $('form#ticket-form').submit(function(event){
  //   event.preventDefault();
  // });
});
