import React, { Component } from 'react';
import './searchbar.scss';

export class SearchBar extends Component {
  render () {
    return (
      <div className="search-bar">
        <div className="search-bar-logo-container">
          <img src="../../../img/bfi.jpg" className = "logo"/>
        </div>
        <form className="search-bar-form">
          <div className="search-bar-form-input-container"><input type="text" /></div>
          <div>
            <button> Search </button>
          </div>
        </form>
        <div className="search-bar-nav">
          <p> Help </p>
          <p> Login </p>
          <p> Icon</p>
        </div>
      </div>
    )
  }
}

export default SearchBar;
