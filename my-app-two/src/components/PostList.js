import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions'


import from ''

class PostList extends React.Component{

  componentDidMount(){
    this.props.fetchPosts();
  }

  renderList(){
    const returndata= this.props.posts.map(values=>{
      return (
        <div className="card-container">
          <div className="row">
            <div className="col">
              <i class="far fa-id-card"></i>
              <div>
                <h2>{values.title}</h2>
                <p>{values.body}</p>
              </div>

            </div>
          </div>
        </div>
      );
    })
    return returndata;
  }


  render(){
    return <div>{this.renderList()}</div>
  };
};

const mapStateToprops =(state)=>{
  return{posts:state.posts};
}

export default connect(mapStateToprops,{fetchPosts})(PostList);
