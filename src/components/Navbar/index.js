import React, { Component } from 'react';
import './navbar.scss';

export class Navbar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <nav className="nav" style = { {color: "green" }}>
        <p> I am a chosen one navbar </p>
      </nav>
    );
  }
}

export default Navbar;
