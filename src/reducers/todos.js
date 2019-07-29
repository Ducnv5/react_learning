const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          color_id: 0
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, color_id: todo.color_id < 3 ? todo.color_id + 1 : 0}
          : todo
      )
    default:
      return state
  }
}

export default todos
