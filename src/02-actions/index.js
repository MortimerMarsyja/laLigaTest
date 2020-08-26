export const fetchUsers = payload => ({
  type: 'FETCH_SUCCESS',
  payload
})

export const addToken = payload => ({
  type:'ADD_TOKEN',
  payload
})

export const expulseFromSession = payload => ({
  type:'REMOVE_TOKEN',
  payload
})