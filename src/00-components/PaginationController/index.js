import React,{useCallback} from 'react';
//hooks
import { useDispatch } from 'react-redux';
//actions
import {setCurrentPageAction} from '../../02-actions/index';
import { StyledPaginationController } from './PaginationControl.style';


const renderBefore = (currentPage,numberOfTotalPages, setPage) => {
  if(currentPage >= numberOfTotalPages){
    return (<button onClick={() => setPage(currentPage-1)}>Before</button>)
  }
}

const renderAfter = (currentPage,numberOfTotalPages,setPage) => {
  if(currentPage < numberOfTotalPages){
    return (<button onClick={() => setPage(currentPage+1)}>After</button>)
  }
}

const handleChange = (evt,setPage,totalPages,currentPage) => {
  if(totalPages >= evt.target.value && evt.target.value > 0){
    setPage(Number(evt.target.value))
  }
  return currentPage;
}

const renderTools = (currentPage, totalPages, setPage) => {
  return (
  <div className='pagesWrapper'>
    {renderBefore(currentPage, totalPages, setPage)}
      <label> Page </label>
        <input 
          type='number' 
          min='1' 
          max={totalPages} placeholder={currentPage} 
          onChange={(evt) => handleChange(evt,setPage,totalPages,currentPage)}
        />
    {renderAfter(currentPage, totalPages, setPage)}
  </div>
  )
}

const PaginationController = ({data,currentPage,loaderFunction}) => {
  const dispatch = useDispatch();
  const setPage = useCallback((numberPage) => {
    dispatch(setCurrentPageAction(numberPage));
    loaderFunction(true);
  }, [dispatch, loaderFunction]);
  return(
    <StyledPaginationController>{data.page_number < 0 ? '' : renderTools(currentPage, data.total_pages, setPage)}</StyledPaginationController>
  )
}

export default PaginationController;
