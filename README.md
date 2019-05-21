# liri-node-app

## Overview
The purpose of this assignment was to make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is be a command line node app that takes in parameters and gives you back data.

LIRI recognizes the following commands:
* concert-this
* spotify-this-song
* movie-this
* do-what-it-says

## Screenshots

### concert-this
concert-this searches the Bands in Town Artist Events API for an artist and return the following to the terminal:
* Name of the venue
* Venue location
* Date of the event (formatted as "MM/DD/YYYY")

insert concert-list

### spotify-this-song
spotify-this-song shows the following information about the song from the Spotify API to the terminal:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

If a song is not specified, the search defaults to "The Sign" by Ace of Base.

insert spotify-this-song

### movie-this
movie-this shows the following information about the moview from the Open Movie DB API in the terminal:
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.


If a movie is not specified, the search defaults to "Mr Nobody". Note that movies without Rotten Tomatoes ratings have a result of "N/A", such as in the case of "Godfather", a 1991 movie produced in India.

insert movie-this
### do-what-it-says
do-what-it-says reads a text file and executes whichever of the previous commands is listed.

insert do-what-it-says

### Errors
LIRI displays the available commands if a valid command is not provided, and any error raised during the API calls, such as when there is no internet connection as shown.

insert errors


