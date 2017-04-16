import React from 'react';
import ReactModal from 'react-modal';
import MovieItem from './MovieItem';
import AddMovie from './AddMovie';
import { addVisibility } from '../actions/actionCreators';

class MovieGrid extends React.Component {
  render() {
    return (
      <main>
        {/* <button className="btn" onClick={() => this.props.fetchMovies()}>Load Data</button> */}
        <ul className="movie-list">
          {this.props.movies.items.map((movie, i) => <MovieItem {...this.props} key={i} id={i} movie={movie}/>)}
        </ul>
        <button className="btn add-btn" onClick={() => this.props.toggleAddForm(addVisibility.SHOW_FORM)}>Add Movie</button>

        <ReactModal
          isOpen={this.props.addForm}
          contentLabel="Add Movie Form"

        >
          <button className="modal-btn" onClick={() => this.props.toggleAddForm(addVisibility.DONT_SHOW_FORM)}>Close</button>
          <AddMovie {...this.props} />

        </ReactModal>

      </main>
    )
  }
}

export default MovieGrid;
