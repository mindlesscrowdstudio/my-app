import React from 'react';
import '../styles/index.css';

var Header = (props) => {
  return (
    <header className="site-header">
      <h1 className="center valign-wrapper ">
        <a href="" className="brand-logo">
        <i className="large material-icons">ac_unit</i>
        </a>
        <span className="center-align">my weather app</span>
      </h1>
    </header>
  )
}
export default Header;