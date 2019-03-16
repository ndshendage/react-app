import { ADD_TODO } from '/actionTypes'

export const addTodo = (item) => {
  return{
    type: ADD_TODO,
    payload: {
      task: item
    }
  }
}
