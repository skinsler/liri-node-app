require("dotenv").config();

let keys = require("./keys.js");
let Spotify = require('node-spotify-api');

let spotify = new Spotify(keys.spotify);

console.log(keys.spotify.id);

