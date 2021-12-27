import React from 'react';
import logo from '../../../assets/images/gitlab-icon-rgb.svg';

import './Auth.css';
import Cart from './Cart/Cart';

function Auth() {
  return (
    <div className="container">
      <div className="leftGroup">
        <h1 className="leftGroup_title">CHECK YOUR</h1>
        <h2 className="leftGroup_description">Profile and Projects</h2>
        <img className="leftGroup_logo" src={logo} alt="logo"></img>
      </div>
      <div className="rightGroup">
        <Cart />
      </div>
    </div>
  );
}

export default Auth;
