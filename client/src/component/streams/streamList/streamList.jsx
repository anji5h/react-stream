import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "./../../../action/index";

export class streamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin = (stream) => {
    if (this.props.userid === stream.userid) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui green button">
            <i className="edit outline icon"></i>EDIT
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui red button">
            <i className="trash alternate outline icon"></i>DELETE
          </Link>
        </div>
      );
    }
  };

  renderStream = () => {
    if(this.props.streams.length===0)
      return <div>No stream available</div>

    let streamList = this.props.streams.map((item) => (
      <div key={item.id} className="item" style={{ padding: "10px 0px" }}>
        {this.renderAdmin(item)}
        <i className="large middle aligned icon youtube"></i>
        <div className="content">
          <Link to={`/streams/show/${item.id}`} className='header'>
            {item.title.toUpperCase()}
          </Link>
          <p className="description">{item.description}</p>
        </div>
      </div>
    ));
    return streamList
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div
          className="large ui right floated animated primary button"
          style={{ marginTop: "20px" }}
          onClick={() => this.props.history.push("/streams/new")}
        >
          <div className="visible content">Create Stream</div>
          <div className="hidden content">
            <i className="plus icon"></i>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h3 className="ui large header">Streams</h3>
        <div className=" ui middle aligned divided list" style={{ marginTop: "20px" }}>
          {this.renderStream()}
        </div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  userid: state.auth.userid,
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { fetchStreams })(streamList);
