//define defaultState and reducer function. 
//the reducer function will take two arguments, state and action

const defaultState = {
  curentUser: {}
}

function reducer(state = defaultState, action) {
  switch(action.type){
    case "SET_USER":
    return {
      ...state,
      curentUser: action.payload
    }
    default: return state
  }
}

export default reducer