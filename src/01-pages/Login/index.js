import React, { useState } from 'react';
//components
import IconComponent from '../../00-components/IconComponent/index';
//hooks
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
//styles
import {StyledLogin} from './login.style';
//services
import {LoginIntoAppCall} from '../../06-services/index';
//actions
import {addToken} from '../../02-actions/index';
//constants
import PATHS from '../../04-constants/paths';
import ICON_LIST from '../../04-constants/iconsList';


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
          history.push(PATHS.MAIN_PAGE);
        })
      .catch(err=>console.error(err))
  }
  return(
  <StyledLogin>
    <div className='leftBlock'>
      <IconComponent color='#000' fill='#000' size='32px' icon={ICON_LIST.logo} strokeWidth='1'/>
      <p>La Liga test</p>
    </div>
    <div className='rightBlock'>
      <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input placeholder={username} onChange={e => setUsername(e.target.value)}/>
            <label>Password:</label>
            <input type="password" placeholder={password} onChange={e => setPassword(e.target.value)}/>
        <input className='inputButton' type='submit' value='Login'/>
      </form>
    </div>
  </StyledLogin>
  )
}

export default Login;