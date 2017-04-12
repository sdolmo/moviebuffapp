function movies(state = [], action) {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [...state, {
        title: action.title,
        director: action.director,
        description: action.description,
        genre: action.genre,
        img: action.image,
        id: '4'
      }];
    case 'UPDATE_MOVIE':
      const index = action.index;
      const newArray = state.slice();
      newArray[index] = {
        id: action.param,
        title: action.title,
        director: action.director,
        description: action.description,
        genre: action.genre,
        img: action.img,
      };
      console.log(newArray);
      return newArray;
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
