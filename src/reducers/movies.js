function movies(state = {
  isFetching: false,
  items: []
}, action) {
  switch(action.type) {
    case 'ADD_MOVIE':
      console.log(state)
      const newAddState = {...state};
      newAddState.items.push({
        title: action.title,
        director: action.director,
        description: action.description,
        genre: action.genre,
        img: action.img,
        id: '4'
      });
      return newAddState;
    case 'UPDATE_MOVIE':
      const index = action.index;
      const newUpdateState = {...state};
      newUpdateState.items[index] = {
        id: action.param,
        title: action.title,
        director: action.director,
        description: action.description,
        genre: action.genre,
        img: action.img,
      };
      return newUpdateState;
    case 'REMOVE_MOVIE':
      return [
        ...state.slice(0,action.index),
        ...state.slice(action.index + 1)
      ]
    case 'FETCH_MOVIES_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'FETCH_MOVIES_RECEIVE':
      const newFetchState = {...state};
      newFetchState.items = [...action.movies];
      return newFetchState;
    default:
      return state;
  }
}

export default movies;
