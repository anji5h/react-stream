import React from "react";
import { Link } from "react-router-dom";
import GoogleOAuth from "../googleOAuth";
export default function Home() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <h1 className="ui small blue header">
        <i className="play circle outline icon"></i>STREAMY
        </h1>
      </Link>
      <div className="menu right">
        <Link to="/" className="item">
          <h3 className='ui small header'>ALL STREAM</h3>
        </Link>
        <GoogleOAuth></GoogleOAuth>
      </div>
    </div>
  );
}
