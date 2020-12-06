import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export class Navbar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="navbar-container fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light nav-section">
          <Link className="navbar-brand" to="/" id="brand">Blue-FI</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item disable">
                <Link className="nav-link highlight-on-hover link disable order" to="cart"> Order</Link>
              </li>
              <li className="nav-item disable">
                <Link className="nav-link highlight-on-hover" to="howitworks">How it works</Link>
              </li>
              <li className="nav-item disable">
                <Link className="nav-link highlight-on-hover" to="/testimonies">Testimonies</Link>
              </li>
            </ul>
            <Link className="nav-link highlight-on-hover" to="/about">About <span className="sr-only">(current)</span></Link>
          </div>
        </nav>
      </div>

    )
  }
}

export default Navbar;
