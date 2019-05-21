require("dotenv").config();
let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let axios = require("axios");
let moment = require("moment");
var fs = require("fs");


let spotify = new Spotify(keys.spotify);

let command = process.argv[2];
let arg = process.argv[3];

runCommand(command, arg);

function runCommand(command, arg) {
    if (command === "concert-list") {
        concertList(arg);
    }
    else if (command === "spotify-this-song") {
        if (!arg) {
            spotifyThisSong("The Sign Ace of Base");
        }
        else {
        spotifyThisSong(arg);
        }
    }
    else if (command === "movie-this") {
        if (!arg) {
            movieThis("Mr Nobody");
        }
        else {
        movieThis(arg);
        }
    }
    else if (command === "do-what-it-says") {
        doWhatItSays();
    }
    else {
        console.log ("Unknown command. Recognized commands are concert-list, spotify-this-song, movie-this, and do-what-it-says");
    }
}

function concertList(arg) {
    let baseURL = "https://rest.bandsintown.com/artists/";
    let queryURL = baseURL + arg + "/events?app_id=codingbootcamp";
    axios.get(queryURL)
        .then( function(response) {
            if (response.status === 200) {
                for (let i=0; i<response.data.length; i++) {
                    console.log("Venue Name: " + response.data[i].venue.name);
                    console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region);
                    console.log("Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                    console.log("");
                }
            }
            else (
                console.log ("Error - Status: " + response.status)
            )    
            })
        .catch (function (error) {
            console.log (error);
        });

        
            
}
function spotifyThisSong(arg) {
    spotify
        .search({ type: 'track', query: arg })
        .then(function(response) {
        console.log("Artist(s): " + response.tracks.items[0].artists[0].name);
        console.log("Song Name: " + response.tracks.items[0].name);
        console.log("Preview URL: " + response.tracks.items[0].preview_url);
        console.log("Album: " + response.tracks.items[0].album.name);

  
        })
        .catch(function(err) {
        console.log(err);
        });
}

function movieThis(arg) {
    let baseURL = "http://www.omdbapi.com/?apikey=trilogy";
    let queryURL = baseURL + "&t=" + arg;
    axios.get(queryURL)
        .then( function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            let rating = "";
            for (i=0; i<response.data.Ratings.length; i++) {
                if (response.data.Ratings[i].Source === "Rotten Tomatoes") {
                    rating = response.data.Ratings[i].Value;
                    break;
                }
                else {
                    rating = "N/A";
                }
            }
            console.log("Rotten Tomatoes Rating: " + rating);
            console.log("Production Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Actors: " + response.data.Actors);
        });
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
    
        var dataArr = data.split(",");
      
        command = dataArr[0];
        arg = dataArr[1].slice(1, -1);

        runCommand(command, arg);
      
      });
}