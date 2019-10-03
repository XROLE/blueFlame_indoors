import React, { Component } from 'react';
import { connect } from 'react-redux';
import './searchbar.scss';

export class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      login:false
    }
  }

  logout (){
    localStorage.removeItem('BFT-token')
    return window.location.reload();
  }

  render () {
    return (
      <div className="search-bar">
        <div className="search-bar-logo-container">
          <img src="http://overstocklogo.com/image/cache/logos/blue_flame_logo_design-550x550.jpg" className = "logo"/>
        </div>
        <form className="search-bar-form">
          <div className="search-bar-form-input-container"><input type="text" placeholder="Search for products here"/></div>
          <div>
            <button> Search </button>
          </div>
        </form>
        <div className="search-bar-nav">
          <p> Help </p>
          {
            !localStorage.getItem('BFT-token') ?
              <p
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
              Login
              </p> :
              <p onClick={() => this.logout()}>
                Logout
              </p>

          }
          <p> Icon</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.signUp.user,
  }
}

export default connect(mapStateToProps)(SearchBar);
