import React,{useEffect} from 'react';
//components
import SelfEditingRow from '../../00-components/SelfEditingRow/index';
import IconComponent from '../../00-components/IconComponent/index';
//styles
import {StyledUser} from './userPage.style';
//hooks
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
//side effects
import {fetchUserByIdSideEffect} from '../../09-side-effects/index';
//constants
import PATHS from '../../04-constants/paths/index';
import ICON_LIST from '../../04-constants/iconsList/index';
//services
import {updateUserByIdCall} from '../../06-services/index';
import {eraseUserByIdCall} from '../../06-services/index';

const eraseUserCurrentUserFunction = (id,history) => {
  history.push(PATHS.MAIN_PAGE)
  eraseUserByIdCall(id);
}


const renderUserContent = (selectedUser,history) => {
 return(
  <StyledUser>
    <div className='leftUserFeatures'>
      <img className='avatar' src={selectedUser.data.avatar} alt='user_avatar'/>
      <SelfEditingRow label='id' value={selectedUser.data.id} isEditedFunction={updateUserByIdCall} idToUpdate={selectedUser.data.id}/>
      <SelfEditingRow label='email' value={selectedUser.data.email} isEditedFunction={updateUserByIdCall} idToUpdate={selectedUser.data.id}/>
      <SelfEditingRow label='first_name' value={selectedUser.data.first_name} isEditedFunction={updateUserByIdCall} idToUpdate={selectedUser.data.id}/>
      <SelfEditingRow label='last_name' value={selectedUser.data.last_name} isEditedFunction={updateUserByIdCall} idToUpdate={selectedUser.data.id}/>
    </div>
    <div className='rightUserFeatures'>
      <button className='circleButton' onClick={()=>{eraseUserCurrentUserFunction(selectedUser.data.id,history)}}>
        <IconComponent color='#000' fill='inherit' size='24px' icon={ICON_LIST.trash} strokeWidth='1.3'/>
      </button>
    </div>
  </StyledUser>
 ) 
}

const getUserByIdInStore = (store) => store.currentUser;
const getTokenFromStore = (store) => store.token || '';
const getLoadingStateFromStore = (store) => store.loading;

const UserPage = () => {
  let history = useHistory();
  const idUser = Number(useParams().id);
  const dispatch = useDispatch();
  const selectedUser = useSelector(getUserByIdInStore);
  const token = useSelector(getTokenFromStore);
  const isLoading = useSelector(getLoadingStateFromStore);

  useEffect(()=>{
    if(token === ''){history.push(PATHS.LOGIN)}
    dispatch(fetchUserByIdSideEffect(idUser))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token,idUser,dispatch])

  return(
    <div>
       {isLoading?<p>Loading...</p>:renderUserContent(selectedUser,history)}
    </div>
  )
}

export default UserPage;