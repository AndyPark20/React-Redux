
//need to import connect method from the redux library
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { selectedSong} from '../actions'

//create a class component
class SongList extends Component{

  //create a function that will render out the arrays of objects for state of songs
  renderPlaylist(){
    return this.props.song.map((values,index)=>{
      return(
        <div key={index}>{values.title}
          <button onClick={() => this.props.selectedSong(values.title)}>Select</button>
        </div>
      );
    });

  };


  render(){
    return(
      <div>{this.renderPlaylist()}</div>
    );
  };
};

//Create a mapStateToProps function that will get the state from the "Store"
//ONLY FOR STATE
// REDUCER CAN GO DIRECTLY TO CONNECT
function mapStateToProps(state){
  return {
    song:state.song
  }
}


//connect method of the react-redux library is going to allow the state to be updated and also reducer function to be passed as a props in the components
export default connect(mapStateToProps, { selectedSong})(SongList)






















// import React,{Component} from 'react';
// import {connect} from 'react-redux';
// import {selectSong} from '../actions';

// class SongList extends Component{

//   renderList(){
//     return this.props.songs.map((song)=>{
//       return(
//         <div className="item" key={song.title}>
//           <div className="right floated content">
//             <button className="ui button primary"
//             onClick={()=>this.props.selectSong(song)}>
//               Select
//             </button>
//           </div>
//           <div className="content">
//             {song.title}
//           </div>
//         </div>
//       )
//     })
//   }


//   render(){
//     return <div className="ui divided list">{this.renderList()}</div>
//   }
// }

// //We need to get the state object from the "Store" to the Child component here
// //By convention we name the fucntion mapStatetoProps, but can name anything we want

// function mapStateToProps(state){
// console.log(state)
// //Will ALWAYS RETURN AN OBJECT --> The component will get it as a props!!!
// return {songs: state.songs};
// }

// export default connect(mapStateToProps,{selectSong}) (SongList);
