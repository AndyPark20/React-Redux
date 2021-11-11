import {api} from '../apis/jsonPlaceholder'

export const fetchPosts = ()=>{
  const result =   api();
  console.log(result)
  return{
    type:'FETCH_POSTS'
  };
};
