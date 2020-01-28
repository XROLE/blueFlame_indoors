import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllProducts } from '../../actions';
import './product.scss';

export class Products extends Component {
  componentDidMount(){
    this.props.getAllProducts();
  };

  render(){
    return(
      <div className="row product-container">
        {this.props.products.products.map(product => (
          <div className="col-6 col-md-6 col-lg-4 card-container" key={product.id} >
            <Link to='/item' className="card">
              <div className="card-body ">
                <div className="image-container" style={{backgroundImage: "url(" + (product.image) + ")"}}></div>
                <div className="cart-section mt-2">
                  <p> #{product.price}</p>
                  <p className="cart-link">+ To Cart</p>
                </div>
              </div>
            </Link>
          </div>
        ))};
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

