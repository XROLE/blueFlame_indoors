import React, { Component, Fragment } from 'react';
import './navbar.scss';

export class Navbar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Fragment>
        <nav className="nav-con" id="nav-con">
          <div className="navbar navbar-expand-lg">
            <a className="navbar-brand" > Blue FI</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="nabarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><a className="nav-link" > About </a></li>
                <li className="nav-item active"><a className="nav-link" > Testimonies </a></li>
                <li className="nav-item active"><a className="nav-link"> How it works </a></li>
              </ul>
            </div>
            <div>
              <p>Place Order </p>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
