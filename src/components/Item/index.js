import React, {Fragment} from 'react';
import Navbar from '../Navbar';
import Searchar from '../SearchBar';
import {  clearCart, addToCart } from '../../utils/Toast/cart';
import { connect } from 'react-redux';

import './item.scss';

export class Item extends React.Component {
  componentDidMount () {
    const item = this.props.location.state;
  }
  render () {
    return (
      <Fragment>
        <Navbar />
        <Searchar history={this.props.history}/>
        <div className="container item-wrapper">
          <div className="row item-row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="image-container">
                <img src={this.props.location.state.image} />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="info-container">
                <h3>{this.props.location.state.name}</h3>
                <div>
                  <p>{this.props.location.state.description}</p>
                </div>
                <div className='table-container'>
                  <table >
                    <tbody>
                      <tr>
                        <td className='bold'>Quantity:</td>
                        <td>{this.props.location.state.quantity}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold'>Price:</td>
                          <td># {this.props.location.state.price}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold'>Date Added:</td>
                        <td>20/01/2020</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="button-container">
                  <p className="add-to-cart" onClick={() => addToCart(this.props.location.state)}>Add To Cart</p>
                  <p className='checkout' onClick={() => clearCart()}>Checkout</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row more-products-row">
            <div className="col-3 product-container">
              <img src="https://tshop.r10s.com/af1/f0a/6456/d6e3/80a8/bf1c/4d83/114ae999d00242ac110003.jpg" />
            </div>
            <div className="col-3 product-container">
              <img src="https://thehomeofinteriors.co.uk/wp-content/uploads/SWCONCH.CH-Contemporary-Cylinder-Hook.jpg" />
            </div>
            <div className="col-3 product-container">
              <img src="https://www.qualitypoles.com/ekmps/shops/qualitypoles1/images/speedy-diamond-metal-curtain-tieback-hooks-pair-satin-silver-3591-p.jpg" />
            </div>
            <div className="col-3 product-container">
              <img src="https://www.dhresource.com/600x600/f2/albu/g10/M00/94/11/rBVaVl1knsWAFPM0AAIUgB55Avo312.jpg" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}


export default connect(null, null)(Item);

