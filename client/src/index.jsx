import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      favorites: [100, 200, 300],
      showFaves: false,
    };

    this.saveMovie = this.saveMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    // you might have to do something important here!
  }

  getMovies() {
    // make an axios request to your server on the GET SEARCH endpoint
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} 
                  showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));