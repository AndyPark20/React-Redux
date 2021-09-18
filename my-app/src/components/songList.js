
























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
