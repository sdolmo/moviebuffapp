export function addMovie(title, director, description, genre, img) {
  return {
    type: 'ADD_MOVIE',
    title,
    director,
    description,
    genre,
    img
  }
}

export function removeMovie(index) {
  return {
    type: 'REMOVE_MOVIE',
    index
  }
}
