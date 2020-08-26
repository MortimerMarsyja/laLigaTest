import React,{useEffect} from 'react';
//hooks
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
//styles
import {StyledHome} from './home.style';
//components
import SelfEditingRow from '../../00-components/SelfEditingRow';
//routes
import PATHS from '../../04-constants/paths';

const getTokenFromStore = (store) => store.token || '';

const Home = (params) =>{
  let history = useHistory();
  const token = useSelector(getTokenFromStore)
  useEffect(()=>{
    console.log(token === '');
    if(token === ''){history.push(PATHS.LOGIN)}
  }, [history, token])
  return(
    <StyledHome>
      <p>You are Home</p>
      <SelfEditingRow value={'test'}/>
    </StyledHome>
  )
}

export default Home;