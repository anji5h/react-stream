import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteStream } from "./../../../action";
import Modal from "../../modal/modal";
import { Link } from "react-router-dom";

export class streamDelete extends Component {
  renderButton = () => (
    <div className="actions">
      <button
        className="ui negative button"
        onClick={() => this.props.deleteStream(this.props.match.params.id)}
      >
        Delete
      </button>
      <Link to="/" className="ui basic button">
        Cancel
      </Link>
    </div>
  );
  render() {
    return (
      <div>
        <Modal
          content="Are you sure want to delete the stream ?"
          header="Delete Stream"
          button={this.renderButton()}
        ></Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteStream })(streamDelete);
