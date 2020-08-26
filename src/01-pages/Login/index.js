import React, { useState } from 'react';
//hooks
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
//styles
import {StyledLogin} from './login.style';
//services
import {LoginIntoAppCall} from '../../06-services/index';
//actions
import {addToken} from '../../02-actions/index';


const Login = () => {
  let history = useHistory();
  const [username,setUsername] = useState('Username');
  const [password,setPassword] = useState('Password');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    LoginIntoAppCall(username,password)
      .then((token)=>
        {
          dispatch(addToken(token));
          history.push('/main_page');
        })
      .catch(err=>console.error(err))
  }
  return(
  <StyledLogin>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input placeholder={username} onChange={e => setUsername(e.target.value)}/>
      </label>
      <label>
        Password:
        <input type="password" placeholder={password} onChange={e => setPassword(e.target.value)}/>
      </label>
      <input type='submit' value='Login'/>
    </form>
  </StyledLogin>
  )
}

export default Login;