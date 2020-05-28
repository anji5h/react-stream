import React, { Component } from "react";
import { signIn, signOut } from "./../action";
import { connect } from "react-redux";

class GoogleOAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return <div className="ui active mini text loader"></div>;
    } 
    else if (this.props.isSignedIn === true)
      return (
        <button className="ui red button" onClick={() => this.auth.signOut()}>
          <i className="google icon"></i> SIGN OUT
        </button>
      )
    else
      return (
        <button className="ui red button" onClick={() => this.auth.signIn()}>
          <i className="google icon"></i>SIGN IN
        </button>
      );
  };
  onAuthChange = (isSignedIn) => {
    isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
  };

  render() {
    return <div className="item">{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userid: state.auth.userid };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleOAuth);
