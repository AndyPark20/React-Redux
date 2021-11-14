import jsonPlaceHolder from '../apis/jsonPlaceholder'
import _ from 'lodash';



export const fetchPosts = ()=> async (dispatch)=>{
  const response = await jsonPlaceHolder.get('/posts');
  dispatch({type:'FETCH_POSTS', payload:response.data})
};


export const fetchUser =id=>dispatch=>_fetchUSer(id,dispatch);


//You can only fetch this one time!
const _fetchUSer = _.memoize(async (id, dispatch)=>{
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
});
