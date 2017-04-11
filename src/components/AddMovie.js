import React from 'react';

class AddMovie extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.refs.title.value;
    const director = this.refs.director.value;
    const description = this.refs.description.value;
    const genre = this.refs.genre.value;
    const image = this.refs.image.value;
    this.props.addMovie(title, director, description, genre, image);
    this.refs.addMovieForm()
  }

  render() {
    return (
      <div>
        <h2>Add a Movie</h2>
        <form ref="addMovieForm" className="add-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" placeholder="Title"/>
          <input type="text" ref="director" placeholder="Director"/>
          <textarea ref="description" placeholder="description"></textarea>
          <input type="text" ref="genre" placeholder="Genre"/>
          <input type="text" ref="image" placeholder="Image"/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default AddMovie;
