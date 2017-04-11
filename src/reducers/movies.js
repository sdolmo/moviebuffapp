function movies(state = [], action) {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [...state, {
        title: action.title,
        director: action.director,
        description: action.description,
        genre: action.genre,
        img: action.image
      }];
    case 'REMOVE_MOVIE':
      return [
        ...state.slice(0,action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
}

export default movies;
