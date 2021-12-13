import React from 'react';
import "../components/GoogleAuth.css";
import {signIn, signOut} from '../actions'
import { connect } from 'react-redux';


class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: null };
    this.onSignIn = this.onSignInClick.bind(this);
    this.onSignOut= this.onSignOutClick.bind(this);
  }

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "115216850645-dvhh369cv2ht2opv7lq30aif2f7r0ru9.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  componentDidUpdate(prevProps){
    if(prevProps.currentStatus !== this.props.currentStatus){
      this.setState({isSignedIn:this.props.currentStatus})
    }
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn){
      this.props.signIn(isSignedIn);
    }else{
      this.props.signOut(isSignedIn);
    }
  };


  onSignInClick =()=>{
    this.auth.signIn();
  }

  onSignOutClick =()=>{
    this.auth.signOut();
  }

  renderAuthButon() {
    console.log(this.props.currentStatus)
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return(
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon">Sign Out</i>
        </button>
      );
    } else {
      return(
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon">Sign in With Google</i>
        </button>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButon()}</div>;
  }
}

const mapStateToProps =(state)=>{
  return{
    currentStatus:state.signedInOrOut
  }
}

export default connect(mapStateToProps,{signIn,signOut}) (GoogleAuth);
