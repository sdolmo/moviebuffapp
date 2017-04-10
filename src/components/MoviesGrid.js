import React from 'react';
import MovieItem from './MovieItem';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';

class MovieGrid extends React.Component {
  render() {
    return (
      <section>
        {/* Map over an array of movie objects to render a movie item */}
        {this.props.movies.map((movie, i) => <MovieItem {...this.props} key={i} id={i} movie={movie}/>)}
        <AddMovie />
        <EditMovie />
      </section>
    )
  }
}

export default MovieGrid;
