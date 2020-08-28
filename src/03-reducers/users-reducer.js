//User Reducers
const fetchUsersReducer = (state,payload) => {
  return{...state,users: payload} 
}

const storeUserByIdReducer = (state,payload) => {
  return{...state,currentUser: payload}
}

const setUsersCurrentPageReducer = (state,payload) => {
  return {...state,usersCurrentPage:payload}
}

//Generic Reducer
const setToLoadReducer = (state,payload) => {
  return {...state,loading:payload}
}


//Token Reducers
const addTokenReducer = (state,payload) => {
  return {...state, token: payload.token}
}

const removeTokenReducer = (state) => {
    return {...state.token,token: initialState.token}
}



const reducers = {
  'ADD_USERS': fetchUsersReducer,
  'STORE_USER_BY_ID': storeUserByIdReducer,
  'SET_USERS_CURRENT_PAGE': setUsersCurrentPageReducer,
  'ADD_TOKEN': addTokenReducer,
  'REMOVE_TOKEN': removeTokenReducer,
  'SET_TO_LOAD': setToLoadReducer,
  'default': state => state,
}

const initialState = {
  users: {},
  currentUser: {},
  usersCurrentPage: 0,
  token: '',
  loading: true,
}

const baseReducer = (state = initialState, action) => {
  return (reducers[action.type] || reducers.default)(state, action.payload)
}

export default baseReducer

