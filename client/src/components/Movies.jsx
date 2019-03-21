import React from 'react';
import MovieEntry from "./MovieEntry.jsx";
class Movies extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
     
      <ul className="movies">

        {this.props.movies.map(
          (ele, index)=>(<MovieEntry index = {index} 
                                     cbFunc={this.props.modFavListFunc} 
                                     idNum={ele}
                                     />))}

      </ul>
    );
  }
}

export default Movies;