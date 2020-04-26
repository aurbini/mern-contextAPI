import * as ACTION_TYPES from '../actions/action_types'
import {v1 as uuid} from 'uuid'

export const initialState = {
  user_textChange: '',
  user_textSubmit: '',
  items: [
    {id: uuid(), item: "bacon"}, 
    {id: uuid(), item: "egg"}, 
    {id: uuid(), item: "cheese"}, 
  ]
}


export const FormReducer = (state, action) => {
    switch(action.type) {
      case ACTION_TYPES.USER_INPUT_CHANGE:
        return {
          ...state,
          user_textChange: action.payload
        }
      case ACTION_TYPES.USER_INPUT_SUBMIT:
        console.log(state)
        return {
          ...state,
          items: [
            ...state.items, 
            {
              id: uuid(), item: action.payload
            }
          ]
        }
      case ACTION_TYPES.USER_DELETE_ITEM: 
        return {
          ...state,
          items: state.items.filter(item=> item.id !== action.payload)
        }
      default:
        throw new Error();
    }
}
    