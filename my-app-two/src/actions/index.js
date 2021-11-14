import jsonPlaceHolder from '../apis/jsonPlaceholder'
import _, { get } from 'lodash';


export const fetchPostsAndUsers =()=> async (dispatch,getState)=>{
   await dispatch(fetchPosts());
   console.log(getState().posts)
   const userIds=_.uniq(_.map(getState().posts, 'userId'));
   userIds.forEach(id=>dispatch(fetchUser(id)));
}

// export const fetchPostsAndUsers =()=> async (dispatch,getState)=>{
//     try{
//      await dispatch(fetchPosts());
//      if(getState().posts){
//        getState().posts.forEach(values=>dispatch(fetchUser(values.id)))
//      }
//     }catch(err){
//       console.error(err)
//     }
// }

export const fetchPosts = ()=> async (dispatch)=>{
  const response = await jsonPlaceHolder.get('/posts');
  dispatch({type:'FETCH_POSTS', payload:response.data})
};


export const fetchUser =id=>async dispatch=>{
//You can only fetch this one time!
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
};







//Note=================================
// //You can only fetch this one time!
// const _fetchUSer = _.memoize(async (id, dispatch)=>{
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
// });
