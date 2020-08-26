import React from 'react';
import Logo from '../../08-assets/images/logo';
//styles
import {StyledHeader} from './header.style';

const Header = () => {
  return(
    <StyledHeader>
      <p>La liga</p>      
      <a href="/"><Logo/></a>
      <p>&nbsp;</p>
    </StyledHeader>
  )
}

export default Header;