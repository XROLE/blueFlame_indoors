import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Auth from '../../components/Authentication';
import { connect } from 'react-redux';
import { getCartCount } from '../../actions';
import Modal from '../../components/Modal';
import './searchbar.scss';

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false
    };
  }

  componentDidMount() {
    this.props.getCartCount();
  }

  logout() {
    localStorage.removeItem('BFT-token');
    return window.location.reload();
  }

  render() {
    return (<Fragment>
      <div className="search-bar">
        <div className="control-container">
          <div className="search-bar-logo-container">
            <div className="image-container">
              <div className="image-container-2">
                <img src="http://overstocklogo.com/image/cache/logos/blue_flame_logo_design-550x550.jpg" className="logo" />
              </div>
            </div>
          </div>
          <form className="search-bar-form">
            <div className="search-bar-form-input-container"><input type="text" placeholder="Search for products here" /></div>
            <div>
              <button> Search </button>
            </div>
          </form>
          <div className="search-bar-nav">
            <p className="cart-icon-container"><Link to="/cart" > <FontAwesomeIcon icon={faShoppingCart} /> <span className="cart-quantity">{this.props.cartCount}</span></Link></p>
            <p onClick={() => this.props.history.push('/help')}> Help </p>
            {
              !localStorage.getItem('BFT-token') ?
                <p
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Login
                </p> :
                <>
                  <p className="username" > Hi, Samuel </p>
                  <p onClick={() => this.logout()}>
                    Logout
                </p>
                </>

            }
          </div>
        </div>
      </div>
      <Auth />
    </Fragment>
    );
  }
}
const mapDispatchToProps = () => dispatch => {
  return {
    getCartCount: () => dispatch(getCartCount()),
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.signUp.user,
    cartCount: state.cartCount,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
