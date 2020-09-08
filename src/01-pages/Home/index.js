import React,{useEffect} from 'react';
//hooks
import { useHistory,Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
//styles
import {StyledHome} from './home.style';
//routes
import PATHS from '../../04-constants/paths';
//sideEffects
import {fetchUsersList} from '../../09-side-effects/index';
//components
import PaginationController from '../../00-components/PaginationController/index';
import { setLoadingAction } from '../../02-actions';

const getTokenFromStore = (store) => store.token || '';
const getUsersFromStore  = (store) => store.users || {};
const getCurrentPageFromStore = (store) => store.usersCurrentPage;
const getLoadingStateFromStore = (store) => store.loading;

const renderHomeContent = (users,dispatch) => {
  return users.data.map(user=>
    <li key={user.id}>
      <Link 
        onClick={()=>dispatch(setLoadingAction(true))} 
        to={`/user/${user.id}`}
      >
        {user.first_name} {user.last_name}
      </Link>
    </li>
  )
}

const Home = (params) =>{
  let history = useHistory();
  const isLoading = useSelector(getLoadingStateFromStore);
  const token = useSelector(getTokenFromStore);
  const users = useSelector(getUsersFromStore);
  const currentPage = useSelector(getCurrentPageFromStore);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(token === ''){history.push(PATHS.LOGIN)}
    dispatch(fetchUsersList(currentPage))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token,isLoading,currentPage]);

  return(
    <StyledHome>
      {isLoading? <p>Loading...</p>:
      <div>
        <h3>Users</h3>
        <ul>
          {renderHomeContent(users,dispatch)}
        </ul>
        <PaginationController loaderFunction={setLoadingAction} data={users} currentPage={currentPage}/>
      </div>
      }
    </StyledHome>
  )
}

export default Home;