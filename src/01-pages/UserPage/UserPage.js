import React,{useEffect,useState} from 'react';
//components
import SelfEditingRow from '../../00-components/SelfEditingRow/index';
import IconComponent from '../../00-components/IconComponent/index';
import ComposedSelfEditingRow from '../../00-components/ComposedSelfEditingRow';
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
import {updateUserByIdCall,eraseUserByIdCall} from '../../06-services/index';
//actions
import {setLoadingAction} from '../../02-actions/index';

const eraseUserCurrentUserFunction = (id,history) => {
  history.push(PATHS.MAIN_PAGE)
  eraseUserByIdCall(id);
}

const returnToHome = (dispatch,history) => {
  dispatch(setLoadingAction(true));
  history.push(PATHS.MAIN_PAGE);
}

const renderUserContent = (selectedUser,history,dispatch,isEditing,setEditing) => {
  const formToSend = {
    'id':selectedUser.data.id,
    'email':selectedUser.data.email,
    'first_name':selectedUser.data.first_name,
    'last_name':selectedUser.data.last_name,
  }
 return(
  <StyledUser>
    <div className='user'>
      <ComposedSelfEditingRow 
        data={{'first_name':formToSend.first_name,'last_name':formToSend.last_name}}
        idToUpdate={formToSend.id}
        isEditedFunction={updateUserByIdCall}
        editingStatus={isEditing} 
      />
    </div>
    <div className='leftUserFeatures'>
      <img className='avatar' src={selectedUser.data.avatar} alt='user_avatar'/>
      <SelfEditingRow 
        label='id' 
        value={formToSend.id} 
        editingStatus={isEditing} 
        isEditedFunction={updateUserByIdCall} 
        idToUpdate={selectedUser.data.id}
      />
      <SelfEditingRow 
        label='email' 
        value={formToSend.email} 
        editingStatus={isEditing} 
        isEditedFunction={updateUserByIdCall} 
        idToUpdate={selectedUser.data.id}
      />
    </div>
    <div className='rightUserFeatures'>
      <button className='circleButton' onClick={()=>{eraseUserCurrentUserFunction(formToSend.id,history)}}>
        <IconComponent color='#000' fill='inherit' size='24px' icon={ICON_LIST.trash} strokeWidth='1.3'/>
      </button>
      <button className='circleButton' onClick={()=>{returnToHome(dispatch,history)}}>
        <IconComponent color='#000' fill='inherit' size='24px' icon={ICON_LIST.returnArrow} strokeWidth='1.3'/>
      </button>
      <button className='circleButton' onClick={()=>{setEditing(true)}}>
        <IconComponent color='#000' fill='inherit' size='24px' icon={ICON_LIST.editing} strokeWidth='1.3'/>
      </button>
    </div>
  </StyledUser>
 ) 
}

const getUserByIdInStore = (store) => store.currentUser;
const getTokenFromStore = (store) => store.token || '';
const getLoadingStateFromStore = (store) => store.loading;

const UserPage = () => {
  const [editing,setEditing] = useState(false);
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
       {isLoading?<p>Loading...</p>:renderUserContent(selectedUser,history,dispatch,editing,setEditing)}
    </div>
  )
}

export default UserPage;