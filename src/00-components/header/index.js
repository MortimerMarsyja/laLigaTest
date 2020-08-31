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
      <a href="/">
        <IconComponent color='red' fill='red' size='24px' icon={iconList.logo} strokeWidth='1.3'/>
      </a>
      <p>&nbsp;</p>
    </StyledHeader>
  )
}

export default Header;