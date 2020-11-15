import React from 'react';
import axios from 'axios';
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  };
  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({movies, isLoading:false})
  };
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
  return <div>{isLoading ? "Loading..." : movies.map(movie =>{
    console.log(movie);
    return (
      <Movie 
        id={movie.id} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.poster}
        />
    );
  })}
  </div>
  }
}   

export default App;
