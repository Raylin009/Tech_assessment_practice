var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var axios = require('axios');

//Helpers
var apiHelpers = require('./helpers/apiHelpers.js');

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));


//OPTION 1: Use regular routes
app.get('/search', function(req, res) {

  console.log(req.query)
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1df38404d86bbabddd3afcf598bc2a71&language=en-US&sort_by=vote_average.asc&include_adult=true&include_video=false&page=1&vote_count.gte=50&with_genres=${req.query.genreID}`)
  .then(function(movieList){
    //console.log(movieList.data)
    res.send(movieList.data)
  })
  .catch(function(err){
    console.log('it failed in index', err)
    res.send('axios in app failed you search version')
  })

// res.send(req.what)

  // get the search genre     

  // https://www.themoviedb.org/account/signup

  // use this endpoint to search for movies by genres, you will need an API key

  // https://api.themoviedb.org/3/discover/movie

  // and sort them by horrible votes using the search parameters in the API
});

app.get('/genres', function(req, res) {
  console.log(req)
  axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=1df38404d86bbabddd3afcf598bc2a71&language=en-US').then(function(respond){
    res.send(respond.data)
  }, function (err){
    res.send('axios in app.get failed you' + err)
  })

});

app.post('/save', function(req, res) {

});

app.post('/delete', function(req, res) {

});

//OPTION 2: Use Express Router
//IF you decide to go with this option delete OPTION 1 to continue
//Routes
const movieRoutes = require('./routes/movieRoutes.js');
//Use routes
app.use('/movies', movieRoutes);

// app.get('/genres',movieRoutes)


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
