import React from 'react';
import ReactModal from 'react-modal'
import MovieItem from './MovieItem';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import { visibilityFilter } from '../actions/actionCreators';

class MovieGrid extends React.Component {
  render() {
    return (
      <section>
        {/* Map over an array of movie objects to render a movie item */}
        {this.props.movies.map((movie, i) => <MovieItem {...this.props} key={i} id={i} movie={movie}/>)}
        <button onClick={() => this.props.toggleAddForm(visibilityFilter.SHOW)}>Add Movie</button>
        <ReactModal
          isOpen={this.props.addForm}
          contentLabel="Add Movie Form"
        >
          <button onClick={() => this.props.toggleAddForm(visibilityFilter.DONT_SHOW)}>Close</button>
        </ReactModal>
      </section>
    )
  }
}

export default MovieGrid;
