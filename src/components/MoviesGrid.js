import React from 'react';
import ReactModal from 'react-modal';
import MovieItem from './MovieItem';
import AddMovie from './AddMovie';
import { addVisibility } from '../actions/actionCreators';

class MovieGrid extends React.Component {
  render() {
    return (
      <div>

        <ul>
          {this.props.movies.items.map((movie, i) => <MovieItem  key={i} id={i} movie={movie} {...this.props}/>)}
        </ul>

        <button onClick={() => this.props.toggleAddForm(addVisibility.SHOW_FORM)}>Add Movie</button>
        <button onClick={() => this.props.fetchMovies()}>Load Data</button>

        <ReactModal
          isOpen={this.props.addForm}
          contentLabel="Add Movie Form"
        >
          <button onClick={() => this.props.toggleAddForm(addVisibility.DONT_SHOW_FORM)}>Close</button>
          <AddMovie {...this.props} />

        </ReactModal>

      </div>
    )
  }
}

export default MovieGrid;
