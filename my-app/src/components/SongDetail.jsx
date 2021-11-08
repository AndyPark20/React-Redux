// import React from 'react';
// import {connect} from 'react-redux';




// const SongDetail = (props)=>{
// if(props.songInfo){
//   console.log('hello')
//   return(<div>{console.log(props.songInfo.title)}</div>);
// }
// return <div>Please select a song</div>
// }

// const thisMapStateToProps =(state)=>{
//   return (
//     {songInfo:state.selectedSong}
//   )
// }

// export default connect(thisMapStateToProps)(SongDetail)



import React from 'react';
import {connect} from 'react-redux';

const SongDetail =({songDetails})=>{
  if(songDetails){
      return <div>{songDetails.track}</div>;
  }
  return <div>Please Select a Song!</div>


}

const thisMapStateToProps=(state)=>{
  return{
    songDetails:state.selectedSong
  }
}

export default connect(thisMapStateToProps)(SongDetail)
