
//Create Action Creator for userSelected Songs

export const selectedSong =(song)=>{
  //Will always return an object for Action form
  return {
    type:'SONG_SELECTED',
    payload:song
  };
};



















// //We are using the same file name called index.js so that when the webpack compiles it, it can search for index.js

// //action creator
// export const selectSong =(song)=>{
//   //return action
//   return{
//     //We need to have TYPE property as well as an optional payload property for the Action (aka form from the analogy)
//     type:'SONG_SELECTED',
//     payload: song
//   };
// };


// //named export ---> allows us to export many different functions vs. export default can only export one single function
