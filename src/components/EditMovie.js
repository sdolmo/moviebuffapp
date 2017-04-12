import React from 'react';

class EditMovie extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const param = this.props.params.id;
    const index = this.props.index;
    const title = this.refs.title.value;
    const director = this.refs.director.value;
    const description = this.refs.description.value;
    const genre = this.refs.genre.value;
    const image = this.refs.image.value;
    this.props.updateMovie(param, index, title, director, description, genre, image);
  }

  render() {
    return (
      <div>
        <h2>Edit Movie</h2>
        <form ref="editMovieForm" className="edit-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" defaultValue={this.props.movie.title}/>
          <input type="text" ref="director" defaultValue={this.props.movie.director}/>
          <textarea ref="description" defaultValue={this.props.movie.description}></textarea>
          <input type="text" ref="genre" defaultValue={this.props.movie.genre}/>
          <input type="text" ref="image" defaultValue={this.props.movie.img}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default EditMovie;
