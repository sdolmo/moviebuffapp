import React from 'react';
import { Link } from 'react-router';

class MovieItem extends React.Component {
  render() {
    return (
      <li className="movie-item">
        <Link to={`/movies/${this.props.movie.id}`}>
          <img src={this.props.movie.img} alt={this.props.movie.title}/>
          <section>
            <h4>{this.props.movie.title}</h4>
            <em><p>{this.props.movie.director}</p></em>
          </section>
        </Link>
      </li>
    )
  }
}

export default MovieItem
