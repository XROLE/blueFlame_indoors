import React, { Component, Fragment } from 'react';
import { productsData } from './productsData';
import './product.scss';

export default class Products extends Component {
  render(){
    return(
      <div className="row product-container">
        {productsData.map(product => (
          <div className="col-6 col-md-6 col-lg-4 card-container" key={productsData.id} >
            <div className="card">
              <div className="card-body ">
                <div className="image-container" style={{backgroundImage: "url(" + (product.imageUrl) + ")"}}></div>
                <div className="cart-section mt-2">
                  <p> #{product.price}</p>
                  <p className="cart-link">+ To Cart</p>
                </div>
              </div>
            </div>
          </div>
        ))};
      </div>
    );
  }
}
