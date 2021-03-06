export const mergeArr = (arr1,arr2) => {return [...arr1,...arr2]}

export const filterArrDuplicates = (arr) => {
  return arr.filter((item,index)=>arr.indexOf(item)===index) 
} 

export const findIn = (array, key, searchFor) => {
  return array.find((value) => value[key] === searchFor)
}

export const replaceWithParameters = (arr, key, searchFor, payload) => {
  return arr.map(item => item[key] === searchFor ? {...item, payload}: item);
}

export const buildSimpleSideEffect = (
  service,
  action,
  successAction,
) => (...args) => (dispatch) => {
  service.apply(null, args)
    .then(response => dispatch(action(response)))
    .catch(error => console.error(error))
    .finally(()=>dispatch(successAction(false)))
};
