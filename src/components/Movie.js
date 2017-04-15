import React from 'react';
import ReactModal from 'react-modal';
import MovieItem from './MovieItem';
import EditMovie from './EditMovie';
import { editVisibility } from '../actions/actionCreators';

class Movie extends React.Component {
  render() {
    const i = this.props.movies.items.findIndex((movie) => movie.id === parseInt(this.props.params.id));
    const movie = this.props.movies.items[i];
    console.log(i);
    console.log(movie);
    return (
      <div>
        <MovieItem movie={movie}/>
        <img src={movie.img} />
        <section>
          <p>{movie.description}</p>
          <p>{movie.genre}</p>
        </section>

        <button onClick={() => this.props.toggleEditForm(editVisibility.SHOW)}>Edit Movie</button>

        <ReactModal
          isOpen={this.props.editForm}
          contentLabel="Edit Movie Form"
        >
          <button onClick={() => this.props.toggleEditForm(editVisibility.DONT_SHOW)}>Close</button>
          <EditMovie {...this.props} movie={movie} index={i}/>

        </ReactModal>
      </div>
    )
  }
}

export default Movie;
