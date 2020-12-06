import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../../actions';
import { addToCart } from '../../utils/Toast/cart';
import './product.scss';

export class Products extends Component {
  componentDidMount(){
    this.props.getAllProducts();
  };

  render(){
    return(
      <div className="row product-container">
        {this.props.products.products.map(product => {
          return (
          <div className="col-6 col-md-4 col-lg-3 card-container" key={product.id}>
            <div className="card">
              <div className="card-body ">
                <div className="image-container" style={{backgroundImage: "url(" + (product.image) + ")"}} onClick={() => this.props.history.push('/item', product)}></div>
                <div className="cart-section mt-2">
                  <p className="lower-font"> #{product.price}</p>
                  <p className="cart-link lower-font" onClick={() => {
                    product['volume'] =1;
                  return addToCart(product)
                  }}>+ To Cart</p>
                </div>
              </div>
            </div>
          </div>
        )})}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

