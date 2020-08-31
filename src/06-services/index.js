import {LOGIN, USERS} from './endpoints';

export async function LoginIntoAppCall(email,password){
  return await fetch(
    LOGIN,{method:'POST',body: JSON.stringify({email,password}), headers: {
      'Content-Type': 'application/json',
    },}
  )
  .then((response)=>response.json())
  .then((response) => {if (response === ''){throw new Error('Incorrect Email or Password!')} return response;})
  .catch(err=>console.error(err));
}

export async function updateUserByIdCall(userId,objToUpdate){
  return await fetch(
    `${USERS}/${userId}`,{method:'PUT',body:JSON.stringify({objToUpdate}), headers: {
      'Content-Type': 'application/json',
    },}
  )
  .then((res)=>res.json())
  .catch(err=>console.error(err))
}

export async function eraseUserByIdCall(userId){
  return await fetch(
    `${USERS}/${userId}`,{method:'DELETE'}
  )
  .then((res)=>res.json())
  .catch(err=>console.error(err))
}

export async function fetchUsersCall(page){
  return await fetch(
    `${USERS}?page=${page}`,{method:'GET'}
  )
  .then((response)=>response.json())
  .catch(err=>console.error(err))
}

export async function fetchUserByIdCall(userId){
  return await fetch(
    `${USERS}/${userId}`,{method:'GET'}
  )
  .then((response)=>response.json())
  .catch(err=>console.error(err));
}

