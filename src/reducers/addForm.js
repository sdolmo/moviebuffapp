function addForm(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_ADD_FORM':
      console.log(state);
      return action.filter
      default:
        return state;
  }
}

export default addForm;
