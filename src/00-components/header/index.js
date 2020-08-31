import React from 'react';
//components
import IconComponent from '../IconComponent/index';
//styles
import {StyledHeader} from './header.style';
//constants
import iconList from '../../04-constants/iconsList/index';

const Header = () => {
  return(
    <StyledHeader>
      <p>La liga</p>      
      <a className='webIcon' href="/">
        <IconComponent color='#000' fill='#000' size='24px' icon={iconList.logo} strokeWidth='1.3'/>
      </a>
      <p>&nbsp;</p>
    </StyledHeader>
  )
}

export default Header;