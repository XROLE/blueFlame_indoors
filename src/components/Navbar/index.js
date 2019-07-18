import React, { Component } from 'react';
import './navbar.scss';

export class Navbar extends Component {
  constructor(props) {
    super();
  }

  render () {
    return (
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-light nav-section">
          <a className="navbar-brand" href="#" id="brand">Blue-FI</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item disable">
                <a className="nav-link highlight-on-hover" href="#">About <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item disable">
                <a className="nav-link highlight-on-hover" href="#">Testimonies</a>
              </li>
              <li className="nav-item disable">
                <a className="nav-link highlight-on-hover" href="#">How it works</a>
              </li>
            </ul>
            <p className="highlight-on-hover link disable order"> Place Order</p>
          </div>
        </nav>
      </div>

    )
  }
}

export default Navbar;
