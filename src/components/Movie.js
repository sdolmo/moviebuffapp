import React from 'react';
import MovieItem from './MovieItem';

class Movie extends React.Component {
  render() {
    const i = this.props.movies.findIndex((movie) => movie.id === this.props.params.id);
    const movie = this.props.movies[i];
    console.log(movie);
    return (
      <div>
        <MovieItem movie={movie}/>
        <img src={movie.img} />
        <p>{movie.description}</p>
        <p>{movie.genre}</p>
      </div>
    )
  }
}

export default Movie;
