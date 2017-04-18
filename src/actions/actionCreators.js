import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

const url = 'http://localhost:8000/movies';

// EDIT and ADD MODAL

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

// READ
export function requestFetchMovies() {
  return {
    type: 'FETCH_MOVIES_REQUEST'
  }
}

export function fetchMoviesSuccess(movies) {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    movies,
    receivedAt: Date.now()
  }
}

export function fetchMoviesFail(response) {
  return {
    type: 'FETCH_MOVIES_FAIL',
    error: response,
  }
}

export function fetchMovies() {
  return function (dispatch) {
    dispatch(requestFetchMovies())
    return fetch(url)
    .then(response => response.json())
    .then (json =>
      dispatch(fetchMoviesSuccess(json))
    )
    .catch(response =>
      dispatch(fetchMoviesFail(response))
    )
  }
}

// CREATE
export function requestAddMovie(title, director, description, genre, img) {
  return {
    type: 'ADD_MOVIE_REQUEST',
    title,
    director,
    description,
    genre,
    img
  }
}

export function addMovieSuccess(message) {
  return {
    type: 'ADD_MOVIE_SUCCESS',
    message
  }
}

export function addMovieFail(response) {
  return {
    type: 'ADD_MOVIE_FAIL',
    error: response
  }
}

export function addMovie(title, director, description, genre, img) {
  return function(dispatch) {
    dispatch(requestAddMovie(title, director, description, genre, img))
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
        director,
        description,
        genre,
        img
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "omit"
    })
    .then(response => response.json())
    .then(message =>
      console.log(message)
      // dispatch(addMovieSuccess(message))
    )
    .catch(response =>
      dispatch(addMovieFail(response))
    )
  }
}

// UPDATE
export function requestUpdateMovie(param, index, title, director, description, genre, img) {
  return {
    type: 'UPDATE_MOVIE_REQUEST',
    param,
    index,
    title,
    director,
    description,
    genre,
    img
  }
}

export function updateMovieSuccess(message) {
  return {
    type: 'UPDATE_MOVIE_SUCCESS',
    message
  }
}

export function updateMovieFail(response) {
  return {
    type: 'UPDATE_MOVIE_FAIL',
    response
  }
}

export function updateMovie(param, index, title, director, description, genre, img) {
  return function(dispatch){
    dispatch(requestUpdateMovie(param, index, title, director, description, genre, img))
    return fetch(url+`/${param}`, {
      method:"POST",
      body: JSON.stringify({
          title,
          director,
          description,
          genre,
          img
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "omit"
    })
    .then(response => response.json())
    .then(message =>
      console.log(message)
      // dispatch(updateMovieSuccess)
    )
    .catch(response =>
      dispatch(updateMovieFail)
    )
  }
}

// DELETE
export function requestRemoveMovie(index) {
  return {
    type: 'REMOVE_MOVIE',
    index
  }
}

export function removeMovieSuccess() {
  return {

  }
}

export function removeMovieFail() {
  return {

  }
}

export function removeMovie(index, param) {
  return function(dispatch) {
    dispatch(requestRemoveMovie(index))
    return fetch(url+`/${param}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(message =>
      console.log(message)
    )
  }
}
