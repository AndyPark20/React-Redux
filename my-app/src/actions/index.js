// Action Creator (creates Action which is just a plain Js object)

//Since its just a fucntion we do not capitalize the first letter of the function name
export const selectSong =(song)=>{
  //return an action
  return{
    type:'SONG_SELECTED',
    payload: song
  };
};
