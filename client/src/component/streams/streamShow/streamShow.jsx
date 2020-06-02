import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreamById } from "./../../../action";
import flv from "flv.js";

export class StreamShow extends Component {
  constructor() {
    super();
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStreamById(id);
    this.buildplayer(id);
  }

  buildplayer = () => {
    const { id } = this.props.match.params;
    if (this.player || !this.props.stream) return;
    else {
      this.player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${id}.flv`,
      });
      this.player.attachMediaElement(this.videoRef.current);
      this.player.load();
    }
  };
  componentDidUpdate() {
    this.buildplayer();
  }
  componentWillUnmount(){
      this.player.destroy();
  }
  render() {
    if (!this.props.stream) {
      return (
        <div className="ui active inverted dimmer">
          <div className="ui active huge text loader"> Loading Stream . . . .</div>
        </div>
      );
    } else {
      const { title, description, date } = this.props.stream;
      const showdate = new Date(date).toLocaleDateString();
      return (
        <div className="ui segment">
          <video ref={this.videoRef} controls style={{ width: "100%" }}></video>
          <div>
            <div className="large ui divided list">
              <div className="item" id="paded">
                <div className="header">
                  <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
                </div>
                <div className="list">
                  <div className="item">created : {showdate}</div>
                </div>
              </div>
              <div className="item" id="paded">
                <div className="header">Description :</div>
                <div className="list">
                  <div className="item">{description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, props) => ({
  stream: state.streams[props.match.params.id],
});

export default connect(mapStateToProps, { fetchStreamById })(StreamShow);
