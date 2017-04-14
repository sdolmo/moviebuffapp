import React from 'react';
import { Link } from 'react-router';

class MovieItem extends React.Component {
  render() {
    return (
      <li>
        <Link to={`/movies/${this.props.movie.id}`}>
          <h2>{this.props.movie.title}</h2>
          <em><p>{this.props.movie.director}</p></em>
        </Link>
      </li>
    )
  }
}

export default MovieItem
