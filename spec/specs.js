"use strict";

describe("Movie", function() {
  it("creates a movie with the given specifications", function() {
    var testMovie = new Movie("Mad Max: Fury Road", false, ["10:30", "13:00", "15:30", "18:00", "20:30"], 8.3, "R", "George Miller", ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]);
    expect(testMovie.title).to.eql("Mad Max: Fury Road");
    expect(testMovie.newRelease).to.eql(false);
    expect(testMovie.times).to.eql(["10:30", "13:00", "15:30", "18:00", "20:30"]);
    expect(testMovie.score).to.eql(8.3);
    expect(testMovie.rating).to.eql("R");
    expect(testMovie.director).to.eql("George Miller");
    expect(testMovie.actors).to.eql(["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]);
  });

  it("formats the array of actors as a single string", function() {
    var testMovie = new Movie("Mad Max: Fury Road", false, ["10:30", "13:00", "15:30", "18:00", "20:30"], 8.3, "R", "George Miller", ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]);
    expect(testMovie.allActors()).to.eql("Tom Hardy, Charlize Theron, Nicholas Hoult");
  })
});

describe("Ticket", function() {
  it("creates a ticket takes user inputs based on a movie object's attributes", function() {
    var testMovie = new Movie("Mad Max: Fury Road", false, ["10:30", "13:00", "15:30", "18:00", "20:30"], 8.3, "R", "George Miller", ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]);
    var testTicket = new Ticket(testMovie.title, testMovie.newRelease, testMovie.times[3], "senior", true);
    expect(testTicket.movie).to.eql(testMovie.title);
    expect(testTicket.newRelease).to.eql(false);
    expect(testTicket.time).to.eql(testMovie.times[3]);
    expect(testTicket.age).to.eql("senior");
    expect(testTicket.threeD).to.eql(true);
  });
  //
  // it("", function() {
  //
  // });
});
