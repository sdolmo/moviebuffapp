function movies(state = {
  isFetching: false,
  isAdding: false,
  isDeleting: false,
  items: []
}, action) {
  switch(action.type) {
    case 'ADD_MOVIE_REQUEST':
      console.log(state)
      const newAddState = {...state};
      const idNum = state.items.length + 1
      newAddState.items.push({
        title: action.title,
        director: action.director,
        description: action.description,
        genre: action.genre,
        img: action.img,
        id: idNum
      });
      return newAddState;
    case 'UPDATE_MOVIE_REQUEST':
      const index = action.index;
      const newUpdateState = {...state};
      newUpdateState.items[index] = {
        title: action.title,
        director: action.director,
        description: action.description,
        genre: action.genre,
        img: action.img,
        id: action.param
      };
      return newUpdateState;
    case 'REMOVE_MOVIE':
      const newDeleteState = {...state};
      console.log(newDeleteState);
      newDeleteState.items = [
        ...state.items.slice(0,action.index),
        ...state.items.slice(action.index + 1)
      ];
      console.log(state);
      return newDeleteState
    case 'FETCH_MOVIES_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'FETCH_MOVIES_SUCCESS':
      const newFetchState = {...state};
      newFetchState.items = [...action.movies];
      return newFetchState;
    default:
      return state;
  }
}

export default movies;
