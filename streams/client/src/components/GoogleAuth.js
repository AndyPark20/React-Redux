import React from 'react';


class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: null };
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

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButon() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return(
        <button className="ui red google button">
          <i className="google icon">Sign Out</i>
        </button>
      );
    } else {
      return <div>I am not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButon()}</div>;
  }
}

export default GoogleAuth;

//Review code for gapi
