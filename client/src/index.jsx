import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import axios from 'axios'
class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      favorites: [100, 200, 300, ,400, 500, 600, 700, 800, 900, 1000],
      showFaves: false,
    };

    this.saveMovie = this.saveMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.handleFaveListMod = this.handleFaveListMod.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies(id) {
    console.log('in index.getMovies ', { params:{genreID : id}})
    axios.get(`/search?genreID=${id}`)
    .then((movieList)=>{console.log('hi', movieList.data)})
    .catch((err)=>{console.log('getMovie blowed up! fix it Ray!')})
    // make an axios request to your server on the GET SEARCH endpoint
  }

  saveMovie(index) {
    // same as above but do something diff
    this.setState({
      favorites: this.state.favorites.concat(this.state.movies[index])
    })
    console.log('save movie number '+index+' becuse we are in movies list');
  }

  deleteMovie(index) {
    // same as above but do something diff
    var newState = this.state.favorites;
    newState.splice(index, 1);
    this.setState({
      favorites: newState
    })
    console.log('delete movie number '+index+' beacuse we are in fave list');
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  handleFaveListMod (index){
    if(this.state.showFaves){
      this.deleteMovie(index);
    }else{
      this.saveMovie(index);
    }
  }

  

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search genreSearchFunc = {this.getMovies} swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} 
                  showFaves={this.state.showFaves}
                  modFavListFunc = {this.handleFaveListMod}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));