import {mergeArr,filterArrDuplicates,findIn,replaceWithParameters} from '../05-utils'

//User Reducers
const addUserReducer = (state,payload) => {
  const value = findIn(state.users, 'key', payload.id)
  if (value){
    return replaceWithParameters(state.users,'key',payload.id,payload)
  }
  return [...state.users,payload]
}

const fetchUsersReducer = (state,payload) => {
 return{users: filterArrDuplicates(mergeArr(payload,state.users))} 
}

//Token Reducers
const addTokenReducer = (state,payload) => {
  console.log('REDUCER ADD TOKEN', payload);
  return {...state, token: payload.token}
}

const removeTokenReducer = (state) => {
  if(state.token !== ''){
    return {...state.token,token:initialState.token}
  }
}

const reducers = {
  'ADD_USERS': addUserReducer,
  'FETCH_USERS': fetchUsersReducer,
  'ADD_TOKEN': addTokenReducer,
  'REMOVE_TOKEN': removeTokenReducer,
  'default': state => state,
}

const initialState = {
  users: [],
  token:''
}

const baseReducer = (state = initialState, action) => {
  return (reducers[action.type] || reducers.default)(state, action.payload)
}

export default baseReducer

