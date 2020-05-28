import React from "react";
import {Link} from 'react-router-dom';
import GoogleOAuth from "../googleOAuth";
export default function Home() {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>STREAMY</Link>
      <div className='menu right'>
        <Link to='/' className='item' >ALL STREAM</Link>
        <GoogleOAuth></GoogleOAuth>
      </div>
    </div>
  );
}
