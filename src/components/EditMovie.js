import React from 'react';

class EditMovie extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Edit Movie</h2>
        <form ref="editMovieForm" className="edit-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" placeholder="Title" value={this.props.movie.title}/>
          <input type="text" ref="director" placeholder="Director" value={this.props.movie.director}/>
          <textarea ref="description" placeholder="description" value={this.props.movie.description}></textarea>
          <input type="text" ref="genre" placeholder="Genre" value={this.props.movie.genre}/>
          <input type="text" ref="image" placeholder="Image" value={this.props.movie.img}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default EditMovie;
