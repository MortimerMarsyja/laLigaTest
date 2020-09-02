import React from 'react';
//components
import IconComponent from '../IconComponent/index';
//styles
import {StyledHeader} from './header.style';
//hooks
import { useDispatch } from 'react-redux';
//actions
import {logoutAction} from '../../02-actions/index';

const Header = ({icon,title}) => {
  const dispatch = useDispatch();
  return(
    <StyledHeader>
      <div className='header-wrapper-left'>
        <p>{title}</p>      
        <div className='webIcon'>
          <IconComponent color='#000' fill='#000' size='24px' icon={icon} strokeWidth='1.3'/>
        </div>
      </div>
      <div className='header-wrapper-right'>
         <div className='buttonLink' onClick={()=>dispatch(logoutAction())}>Logout</div>
      </div>
    </StyledHeader>
  )
}

export default Header;