import React from 'react';
//styles
import {StyledHome} from './home.style';
//components
import SelfEditingRow from '../../00-components/SelfEditingRow';

const Home = (params) =>{
  console.log(params)
  return(
    <StyledHome>
      <p>You are Home</p>
      <SelfEditingRow value={'test'}/>
    </StyledHome>
  )
}

export default Home;