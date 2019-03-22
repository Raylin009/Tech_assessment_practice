const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org
module.exports.queryAPI = function(){
    console.log('api helper')
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1df38404d86bbabddd3afcf598bc2a71&language=en-US`)
    .then(function(response){
        return response
    })

    return 'HEYY!!'
    // .catch(console.log('fucked up here'))
    // console.log('apiHelpers connected')
    // return 'apiHelpers connected return version'
}
// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file