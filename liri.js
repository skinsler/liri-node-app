require("dotenv").config();
let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let axios = require("axios");

let spotify = new Spotify(keys.spotify);

console.log(keys.spotify.id);

let command = process.argv[2];
let arg = process.argv[3];

if (command === "concert-list") {
    concertList(arg);
}
else if (command === "spotify-this-song") {
    spotifyThisSong(arg);
}
else if (command === "movie-this") {
    movieThis(arg);
}
else if (command=== "do-what-it-says") {
    doWhatItSays(arg);
}
else {
    console.log ("Unkown command");
}

function concertList(arg) {
    let baseURL = "http://www.omdbapi.com/?apikey=trilogy";
    let queryURL = baseURL + "&t=" + arg;
    axios.get(queryURL)
        .then( function(response) {
            console.log(response);
        });
}
function spotifyThisSong(arg) {
    let baseURL = "http://www.omdbapi.com/?apikey=trilogy";
    let queryURL = baseURL + "&t=" + arg;
    axios.get(queryURL)
        .then( function(response) {
            console.log("The movie's rating is: " + response.data.imdbRating);
        });
}
function movieThis(arg) {
    let baseURL = "http://www.omdbapi.com/?apikey=trilogy";
    let queryURL = baseURL + "&t=" + arg;
    axios.get(queryURL)
        .then( function(response) {
            console.log("The movie's rating is: " + response.data.imdbRating);
        });
}
function doWhatItSays(arg) {
    let baseURL = "http://www.omdbapi.com/?apikey=trilogy";
    let queryURL = baseURL + "&t=" + arg;
    axios.get(queryURL)
        .then( function(response) {
            console.log("The movie's rating is: " + response.data.imdbRating);
        });
}