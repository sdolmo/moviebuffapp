import React from 'react';
import ReactModal from 'react-modal';
import MovieItem from './MovieItem';
import AddMovie from './AddMovie';
import { addVisibility } from '../actions/actionCreators';

class MovieGrid extends React.Component {
  render() {
    return (
      <section>
        {this.props.movies.items.map((movie, i) => <MovieItem {...this.props} key={i} id={i} movie={movie}/>)}
        <button onClick={() => this.props.toggleAddForm(addVisibility.SHOW_FORM)}>Add Movie</button>
        <button onClick={() => this.props.fetchMovies()}>Reload</button>
        <ReactModal
          isOpen={this.props.addForm}
          contentLabel="Add Movie Form"
        >
          <button onClick={() => this.props.toggleAddForm(addVisibility.DONT_SHOW_FORM)}>Close</button>
          <AddMovie {...this.props} />
        </ReactModal>
      </section>
    )
  }
}

export default MovieGrid;
