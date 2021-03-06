import React from 'react';
import { editVisibility } from '../actions/actionCreators';

class EditMovie extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const param = parseInt(this.props.params.id);
    const index = this.props.index;
    const title = this.refs.title.value;
    const director = this.refs.director.value;
    const description = this.refs.description.value;
    const genre = this.refs.genre.value;
    const image = this.refs.image.value;
    this.props.updateMovie(param, index, title, director, description, genre, image);
    this.props.toggleEditForm(editVisibility.DONT_SHOW);
  }

  render() {
    return (
      <div className="modal">
        <h2>Edit Movie</h2>
        <form className="modal-form" ref="editMovieForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" defaultValue={this.props.movie.title}/>
          <input type="text" ref="director" defaultValue={this.props.movie.director}/>
          <input type="text" ref="genre" defaultValue={this.props.movie.genre}/>
          <input type="text" ref="image" defaultValue={this.props.movie.img}/>
          <textarea ref="description" defaultValue={this.props.movie.description}></textarea>
          <button className="modal-btn">Submit</button>
        </form>
      </div>
    )
  }
}

export default EditMovie;
