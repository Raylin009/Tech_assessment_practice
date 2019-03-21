import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: ['G1', 'G2', 'G3', 'G4'],
      optSelected: ''
    };
    this.trackSelection = this.trackSelection.bind(this);
  }

  componentDidMount() {
    console.log('Success, componentDidMount')
    //getGeneres
    //props.getMovieList 
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    //axios.get('/genres').then( something )
  }

  trackSelection(event) {
    this.setState({
      optSelected : event.target.value
    })
    
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>        
          <select onChange={this.trackSelection} id='genresSelection'>
            {this.state.genres.map((ele)=>(<option value = {ele}>{ele}</option>))}
          </select>
        <br/><br/>

        <button onClick={(event)=>(console.log(this.state.optSelected))}>Search</button>

      </div>
    );
  }
}

export default Search;