import React, { Component } from "react";
import { createStream } from "./../../../action/index";
import { connect } from "react-redux";
import StreamForm from "./../streamForm/streamForm";

class StreamCreate extends Component {
  //handle submit
  onSubmit = (value) => {
    if (this.props.isSignedIn) this.props.createStream(value);
    else document.querySelector("#error").classList.toggle("hidden");
  };

  render() {
    return (
      <div>
        <StreamForm
          onSubmit={this.onSubmit}
          isSignedIn={this.props.isSignedIn}
          title={"CREATE STREAM"}
        ></StreamForm>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { createStream })(StreamCreate);
