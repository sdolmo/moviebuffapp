function editForm(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_EDIT_FORM':
      console.log(state);
      return action.filter
      default:
        return state;
  }
}

export default editForm;
