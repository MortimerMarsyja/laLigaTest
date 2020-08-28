import React,{useCallback} from 'react';
//hooks
import { useDispatch } from 'react-redux';
//actions
import {setCurrentPageAction} from '../../02-actions/index';


const renderBefore = (currentPage,numberOfTotalPages, setPage) => {
  if(currentPage > numberOfTotalPages){
    return (<button onClick={() => setPage(currentPage-1)}>Before</button>)
  }
}

const renderAfter = (currentPage,numberOfTotalPages,setPage) => {
  if(currentPage < numberOfTotalPages){
    return (<button onClick={() => setPage(currentPage+1)}>After</button>)
  }
}

const renderTools = (currentPage, totalPages, setPage) => {
  return (
  <>
    {renderBefore(currentPage, totalPages, setPage)}
      <label>
        Page
        <input type='number' min='0' max={totalPages} placeholder={currentPage} onChange={(evt) => setPage(Number(evt.target.value))}/>
      </label>
    {renderAfter(currentPage, totalPages, setPage)}
  </>
  )
}

const PaginationController = ({data,currentPage}) => {
  const dispatch = useDispatch();
  const setPage = useCallback((numberPage) => {
    dispatch(setCurrentPageAction(numberPage));
  }, [dispatch]);
  return(
    <>{data.page_number === 1 ? '' : renderTools(currentPage, data.total_pages, setPage)}</>
  )
}

export default PaginationController;
