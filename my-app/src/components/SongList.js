// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {selectSong} from '../actions/index'

// import './songList.css';

//  class SongList extends Component{

//   renderList(){
//     return this.props.songs.map((song,index)=>{
//       return (
//         <div key={index} className="align">
//           <div>{song.title}</div>
//           <button
//           onClick={()=>this.props.selectSong(song)}
//           className="button">Select</button>
//         </div>
//       );
//     })
//   }


//   render(){
//     return (
//       <div>
//         {this.renderList()}
//       </div>
//     );
//   }
// }


// const mapStateToProps=(state)=>{
//   return{songs:state.songs};

// }

// export default connect(mapStateToProps,{selectSong})(SongList);

import React from 'react';
import {connect} from 'react-redux';
import './songList.css';
import {selectSong} from '../actions'


const SongList =(props)=>{

  const renderSongList =()=>{

    return props.song.map((values,index)=>{
      return(
        <div key={index} className='align'>
          <div>{values.track}</div>
          <button onClick={()=>selectSong(values)}>Select Song</button>
        </div>
      )
    })
  }

return(
  <div>{renderSongList()}</div>
)
}

const mapStateToProps =(state)=>{
  console.log(state)
  return {song:state.songs}
}

//use the connect function to communicate with the Provider component to retrieve or update state with reducers
export default connect(mapStateToProps,{selectSong})(SongList)
