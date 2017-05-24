import React, { PropTypes } from 'react'
import logo from 'images/logo.png'
import FontAwesome from "react-fontawesome"

const NavBar = ({logout}) => (
  <div className="navbar container-fluid">
    <div className="logo pull-left">
      <img
        src={logo}
        alt="" />
    </div>
    <button
      className="btn-logout btn pull-right"
      onClick={() => {}}>
      <FontAwesome
        name="sign-out" /> Log out
    </button>
  </div>
)

NavBar.propTypes = {
};

export default NavBar
