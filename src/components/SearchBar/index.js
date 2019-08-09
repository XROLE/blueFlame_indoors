import React, { Component } from 'react';
import SignUp from '../SignUp';
import './searchbar.scss';

export class SearchBar extends Component {
  render () {
    return (
      <div className="search-bar">
        <div className="search-bar-logo-container">
          <img src="http://overstocklogo.com/image/cache/logos/blue_flame_logo_design-550x550.jpg" className = "logo"/>
        </div>
        <form className="search-bar-form">
          <div className="search-bar-form-input-container"><input type="text" /></div>
          <div>
            <button> Search </button>
          </div>
        </form>
        <div className="search-bar-nav">
          <p> Help </p>
          <p
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Login
            {/* <SignUp /> */}
          </p>
          <p> Icon</p>
        </div>
      </div>
    )
  }
}

export default SearchBar;
