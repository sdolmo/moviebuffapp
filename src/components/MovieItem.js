import React from 'react';
import { Link } from 'react-router';

class MovieItem extends React.Component {
  render() {
    return (
      <li>
        <Link to={`/movies/${this.props.movie.id}`}>
          <h3>{this.props.movie.title}</h3>
          <em><p>{this.props.movie.director}</p></em>
        </Link>
      </li>
    )
  }
}

export default MovieItem
