import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: ['G1', 'G2', 'G3', 'G4'],
      optSelected: 28
    };
    this.trackSelection = this.trackSelection.bind(this);
    this.getGenres = this.getGenres.bind(this);
    this.handleGenreSearch = this.handleGenreSearch.bind(this);
  }

  componentDidMount() {
    console.log('Success, componentDidMount')
    this.getGenres()
    //props.getMovieList 
  }

  getGenres() {

    axios.get('/genres').then(function(response){
      // console.log(response.data)
      console.log('getGenres is a success')
      return response.data;
    }, function(err){
      console.log('did not make it out of getGenres inclient' + err)
    })
    .then((newData)=>{
      this.setState(newData)
      
    })
  }

  trackSelection(event) {
    this.setState({
      optSelected : event.target.value
    })
  }
  handleGenreSearch(){
    console.log(this.props.genreSearchFunc)
    console.log(this.state.optSelected)

    this.props.genreSearchFunc(this.state.optSelected)

  }

  render() {
    return (
      <div className="search">
      
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>        
          <select onChange={this.trackSelection} id='genresSelection'>
            {this.state.genres.map((ele)=>(<option value = {ele.id}>{ele.name}</option>))}
          </select>
        <br/><br/>
        <button onClick={this.handleGenreSearch}>Search</button>
      </div>
    );
  }
}

export default Search;