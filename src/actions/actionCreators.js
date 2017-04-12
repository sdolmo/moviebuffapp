export const addVisibility = {
  SHOW_FORM: true,
  DONT_SHOW_FORM: false
}

export const editVisibility = {
  SHOW: true,
  DONT_SHOW: false
}

export function toggleAddForm(filter) {
  return {
    type: 'TOGGLE_ADD_FORM',
    filter
  }
}

export function toggleEditForm(filter) {
  return {
    type: 'TOGGLE_EDIT_FORM',
    filter
  }
}

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

export function updateMovie(param, index, title, director, description, genre, img) {
  return {
    type: 'UPDATE_MOVIE',
    param,
    index,
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
