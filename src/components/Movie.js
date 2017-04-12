import React from 'react';
import ReactModal from 'react-modal';
import MovieItem from './MovieItem';
import EditMovie from './EditMovie';
import { editVisibility } from '../actions/actionCreators';

class Movie extends React.Component {
  render() {
    const i = this.props.movies.findIndex((movie) => movie.id === this.props.params.id);
    const movie = this.props.movies[i];
    console.log(movie);
    return (
      <div>
        <button onClick={() => this.props.toggleEditForm(editVisibility.SHOW)}>Edit Movie</button>
        <MovieItem movie={movie}/>
        <img src={movie.img} />
        <p>{movie.description}</p>
        <p>{movie.genre}</p>
        <ReactModal
          isOpen={this.props.editForm}
          contentLabel="Edit Movie Form"
        >
          <button onClick={() => this.props.toggleEditForm(editVisibility.DONT_SHOW)}>Close</button>
          <EditMovie {...this.props} movie={movie}/>
        </ReactModal>
      </div>
    )
  }
}

export default Movie;
