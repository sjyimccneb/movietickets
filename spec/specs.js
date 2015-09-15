"use strict";

describe("Movie", function() {
  it("creates a movie with the given specifications", function() {
    var madMax = new Movie("Mad Max: Fury Road", false, ["10:30", "13:00", "15:30", "18:00", "20:30"], 8.3, "R", "George Miller", ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]);
    expect(madMax.title).to.eql("Mad Max: Fury Road");
    expect(madMax.newRelease).to.eql(false);
    expect(madMax.times).to.eql(["10:30", "13:00", "15:30", "18:00", "20:30"]);
    expect(madMax.score).to.eql(8.3);
    expect(madMax.rating).to.eql("R");
    expect(madMax.director).to.eql("George Miller");
    expect(madMax.actors).to.eql(["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]);
  });

  it("formats the array of actors as a single string", function() {
    var madMax = new Movie("Mad Max: Fury Road", false, ["10:30", "13:00", "15:30", "18:00", "20:30"], 8.3, "R", "George Miller", ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]);
    expect(madMax.allActors()).to.eql("Tom Hardy, Charlize Theron, Nicholas Hoult");
  })
});

describe("Ticket", function() {
  it("creates a ticket takes user inputs based on a movie object's attributes", function() {
    var madMax = new Movie("Mad Max: Fury Road", false, ["10:30", "13:00", "15:30", "18:00", "20:30"], 8.3, "R", "George Miller", ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]);
    var madMaxTicket = new Ticket(madMax.title, madMax.newRelease, madMax.times[3], "senior", true);
    expect(madMaxTicket.movie).to.eql(madMax.title);
    expect(madMaxTicket.newRelease).to.eql(false);
    expect(madMaxTicket.time).to.eql(madMax.times[3]);
    expect(madMaxTicket.age).to.eql("senior");
    expect(madMaxTicket.threeD).to.eql(true);
  });

  it("tells you the price for Mad Max", function() {
    var madMax = new Movie("Mad Max: Fury Road", false, ["10:30", "13:00", "15:30", "18:00", "20:30"], 8.3, "R", "George Miller", ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]);
    var madMaxTicket = new Ticket(madMax.title, madMax.newRelease, madMax.times[3], "senior", true);
    expect(madMaxTicket.price()).to.eql("$5.5");
  });

  it("tells you the price of Star Wars: The Force Awakes", function() {
    var starWarsTFA = new Movie("Star Wars: The Force Awakes", true, ["10:30", "13:00", "15:30", "18:00", "20:30"], 8.3, "R", "George Miller", ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]);
    var starWarsTFATicket = new Ticket(starWarsTFA.title, starWarsTFA.newRelease, starWarsTFA.times[1], "child", true);
    expect(starWarsTFATicket.price()).to.eql("$4.75");
  });
});
