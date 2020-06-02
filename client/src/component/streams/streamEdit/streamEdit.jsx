import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreamById, editStream } from "./../../../action";
import StreamForm from "./../streamForm/streamForm";
import _ from 'lodash';
export class streamEdit extends Component {
  componentDidMount() {
    this.props.fetchStreamById(this.props.match.params.id);
  }
  onSubmit = (formData) => {
    console.log()
    this.props.editStream(formData,this.props.match.params.id)
  };
  render() {
    if (!this.props.stream) {
      return (
        <div className="ui active inverted dimmer">
          <div className="ui active huge text loader">Loading Streams . . . .</div>
        </div>
      );
    } else
      return (
        <div>
          <StreamForm
            onSubmit={this.onSubmit}
            isSignedIn={this.props.isSignedIn}
            title="EDIT STREAM"
            initialValues={_.pick(this.props.stream,'title','description')}
          ></StreamForm>
        </div>
      );
  }
}

const mapStateToProps = (state, { match }) => {
  return { stream: state.streams[match.params.id], isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { fetchStreamById, editStream })(streamEdit);
