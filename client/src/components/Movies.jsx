import React from 'react';
import MovieEntry from "./MovieEntry.jsx";
class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
  }

  // Make an onClick for each list item. If the movies shown is the search results, 
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)


  render() {
    return (
      <ul className="movies">


        {/* Make this list dynamic! */}

        {this.state.num.map((ele)=>(<MovieEntry idNum={ele}/>))}



        
      </ul>
    );
  }
}

export default Movies;