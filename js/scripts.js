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
