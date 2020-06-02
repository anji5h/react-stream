import React from "react";
import { Link } from "react-router-dom";
import GoogleOAuth from "../googleOAuth";
export default class Home extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
          <Link to="/" className="item">
            <div className="middle aligned content">
              <h3 className="large ui blue header">STREAMY</h3>
            </div>
          </Link>
        <div className="menu right">
          <Link to="/" className="item">
            <button className="ui labeled icon basic button">
              <i className="youtube icon"></i>All Streams
            </button>
          </Link>
          <GoogleOAuth></GoogleOAuth>
        </div>
      </div>
    );
  }
}
