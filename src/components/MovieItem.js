import React from 'react';
import { Link } from 'react-router';

class MovieItem extends React.Component {
  render() {
    return (
      <li className="movie-item">
        <Link to={`/movies/${this.props.movie.id}`}>
          <img src={this.props.movie.img} alt=""/>
          <section>
            <h3>{this.props.movie.title}</h3>
            <em><p>{this.props.movie.director}</p></em>
          </section>
        </Link>
      </li>
    )
  }
}

export default MovieItem
