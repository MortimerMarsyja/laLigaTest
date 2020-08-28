// Actions
import {fetchUsers as fetchUsersAction, setLoadingAction,storeUserById} from '../02-actions/index';
import {fetchUsersCall, fetchUserByIdCall} from '../06-services/index';
import {buildSimpleSideEffect} from '../05-utils/index';

export const fetchUsersList = buildSimpleSideEffect(
  fetchUsersCall,
  fetchUsersAction,
  setLoadingAction
);

export const fetchUserByIdSideEffect = buildSimpleSideEffect(
  fetchUserByIdCall,
  storeUserById,
  setLoadingAction
)
