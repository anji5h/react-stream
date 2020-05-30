import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "./../../../action/index";

export class streamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin = (stream) => {
    if (this.props.userid === stream.userid) {
      return (
        <div className='right floated content'>
          <button className="large ui green labeled icon button">
            <i class="edit outline icon"></i>EDIT
          </button>
          <button className="large ui red labeled icon button">
            <i class="trash alternate outline icon"></i>DELETE
          </button>
        </div>
      );
    }
  };
  
  renderStream = () => {
    const streamList = (this.props.streams || []).map((item) => (
      <div key={item.id} className="item">
         {this.renderAdmin(item)}
        <i className="large middle aligned icon youtube"></i>
        <div className="content">
          {item.title}
          <p className="description">{item.description}</p>
        </div>
      </div>
    ));
    return streamList.length !== 0 ? streamList : <p>Data not available.</p>;
  };

  render() {
    return (
      <>
        <h3 className="ui large header">Streams</h3>
        <div className=" ui large celled list">{this.renderStream()}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  userid: state.auth.userid,
});

export default connect(mapStateToProps, { fetchStreams })(streamList);
