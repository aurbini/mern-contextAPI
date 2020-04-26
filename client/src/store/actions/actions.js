import * as ACTION_TYPES from './action_types'

export const user_delete_item = (item) => {
  return {
    type: ACTION_TYPES.USER_DELETE_ITEM,
    payload: item
  }
}

export const user_input_change = (text) => {
  return {
    type: ACTION_TYPES.USER_INPUT_CHANGE, 
    payload: text
  }
}

export const user_input_submit = (text) => {
  return {
    type: ACTION_TYPES.USER_INPUT_SUBMIT,
    payload: text
  }
}
