//TOKEN ACTIONS

export const addToken = payload => ({
  type:'ADD_TOKEN',
  payload
})

export const expulseFromSession = payload => ({
  type:'REMOVE_TOKEN',
  payload
})

//USERS ACTIONS

export const fetchUsers = payload => ({
  type: 'ADD_USERS',
  payload
})


export const storeUserById = payload => ({
  type:'STORE_USER_BY_ID',
  payload
})

export const setCurrentPageAction = payload => ({
  type:'SET_USERS_CURRENT_PAGE',
  payload
})

// GENERIC ACTIONS

export const setLoadingAction = payload => ({
  type:'SET_TO_LOAD',
  payload
})

export const logoutAction = () => ({
  type:'LOGOUT',
})