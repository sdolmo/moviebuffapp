import React from 'react';
import { addVisibility } from '../actions/actionCreators';

class AddMovie extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.refs.title.value;
    const director = this.refs.director.value;
    const description = this.refs.description.value;
    const genre = this.refs.genre.value;
    const image = this.refs.image.value;
    this.props.addMovie(title, director, description, genre, image);
    this.refs.addMovieForm.reset();
    this.props.toggleAddForm(addVisibility.DONT_SHOW_FORM)
  }

  render() {
    return (
      <div className="modal">
        <h2>Add a Movie</h2>
        <form className="modal-form" ref="addMovieForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" placeholder="Title"/>
          <input type="text" ref="director" placeholder="Director"/>
          <textarea ref="description" placeholder="description"></textarea>
          <input type="text" ref="genre" placeholder="Genre"/>
          <input type="text" ref="image" placeholder="Image"/>
          <input className="btn" type="submit"/>
        </form>
      </div>
    )
  }
}

export default AddMovie;
