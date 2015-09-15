"use strict";

function Movie(title, newRelease, times, score, rating, director, actors) {
  this.title = title;
  this.newRelease = newRelease;
  this.times = times;
  this.score = score;
  this.rating = rating;
  this.director = director;
  this.actors = actors;
}

function Ticket(movie, newRelease, time, age, threeD) {
  this.movie = movie;
  this.newRelease = newRelease;
  this.time = time;
  this.age = age;
  this.threeD = threeD;
}

Movie.prototype.allActors = function () {
  return this.actors.join(", ");
};
