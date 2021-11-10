import {api} from '../apis/jsonPlaceholder'

export const fetchPosts = async()=>{
  const result =  await api();
  console.log(result)
  return{
    type:'FETCH_POSTS'
  };
};
