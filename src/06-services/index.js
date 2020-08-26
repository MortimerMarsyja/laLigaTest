import {LOGIN} from './endpoints';

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