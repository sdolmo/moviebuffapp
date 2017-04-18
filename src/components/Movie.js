import React from 'react';
import ReactModal from 'react-modal';
import EditMovie from './EditMovie';
import { editVisibility } from '../actions/actionCreators';

class Movie extends React.Component {
  handleClick(i) {
    const param = parseInt(this.props.params.id);
    this.props.removeMovie(i, param);
    window.location = '/movies';
  }

  render() {
    const i = this.props.movies.items.findIndex((movie) => movie.id === parseInt(this.props.params.id));
    const movie = this.props.movies.items[i];
    console.log(i);
    console.log(movie);
    return (
      <main className="single-movie">
        <article>
          <img alt={`${movie.title}`} src={movie.img} />
          <section className="movie-description">
            <h3>{movie.title}</h3>
            <h5>Director:</h5>
            <p>{movie.director}</p>
            <h5>Description:</h5>
            <p>{movie.description}</p>
            <h6>Genre: {movie.genre}</h6>
          </section>
        </article>

        <button className="btn edit-btn" onClick={() => this.props.toggleEditForm(editVisibility.SHOW)}>Edit Movie</button>
        <button className="btn delete-btn" onClick={() => this.handleClick(i)}>Delete</button>

        <ReactModal
          isOpen={this.props.editForm}
          contentLabel="Edit Movie Form"
        >
          <button className="modal-btn" onClick={() => this.props.toggleEditForm(editVisibility.DONT_SHOW)}>Close</button>
          <EditMovie {...this.props} movie={movie} index={i}/>

        </ReactModal>
      </main>
    )
  }
}

export default Movie;
