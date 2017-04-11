export const visibilityFilter = {
  SHOW: true,
  DONT_SHOW: false
}

export function toggleAddForm(filter) {
  return {
    type: 'TOGGLE_ADD_FORM',
    filter
  }
}

// export function toggleEditForm() {
//   return {
//     type: 'TOGGLE_EDIT_FORM'
//   }
// }

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
