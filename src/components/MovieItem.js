import React from 'react';
import { Link } from 'react-router';

class MovieItem extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/movies/${this.props.movie.id}`}>
          <h2>{this.props.movie.title}</h2>
          <em><p>{this.props.movie.director}</p></em>
        </Link>
      </div>
    )
  }
}

export default MovieItem
