import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import { getCartItems, deleteItem, incrementItem, decrementItem } from '../../utils/toast/Cart';
import './orderContainer.scss';

export default class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
        }
    }

    removeItem(id){
        deleteItem(id);   
     this.setState(
         { 
            cart: getCartItems()
         }, 
     );
    }


    increment(id){
        incrementItem(id);
        this.setState(
            { 
                cart: getCartItems(),
            }
        );
    }

    decrement(id){
        decrementItem(id);
        this.setState(
            { 
                cart: getCartItems(),
            }
        );
    }

    componentDidMount() {
        this.setState(
            { cart: getCartItems() }
        );

    }
    render() {
        return (
            <Fragment>
                <Navbar />
                <SearchBar />
                <div className="order-page-wrapper">
                    <div className="header-container">
                        <h1> ShoppingCart({this.state.cart.length}) </h1>
                    </div>
                    {
                        this.state.cart.length < 1 ?
                            <div className="cart-image-container">
                                <img src="https://image.shutterstock.com/image-vector/shopping-cart-icon-vector-black-260nw-1495822004.jpg" />
                                <p>Your cart is empty</p>
                            </div> :
                            <div></div>
                    }
                    {
                        this.state.cart.length < 1 ?
                            <div></div> :
                            this.state.cart.map(item => {
                                return (
                                    <div className="cart-item card" key = {item["id"]}>
                                        <div className="row">
                                            <div className="col-4 cart-item-card">
                                                <div className="row">
                                                    <div className="col-6 cart-item-image-container">
                                                        <img src={item['image']} />
                                                    </div>
                                                    <div className="col-6 title-container">
                                                        <p> {item['name']}</p>
                                                        <p className="category-holder"> {item['category']} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 cart-item-price-container">
                                                <p>{item['price']}</p>
                                            </div>
                                            <div className="col-2 cart-item-price-container">
                                    <div className="quantity-control-container">
                                                    <p className="hover bold medium-font-size" onClick={() => this.decrement(item["id"])}>-</p>
                                                    <p className="medium-font-size">{item["volume"]}</p>
                                                    <p className="hover bold medium-font-size" onClick= {() => this.increment(item['id'])}>+</p>
                                                </div>
                                            </div>
                                            <div className="col-3 cart-item-price-container">
                                                <p className="bold"># {item["price"] * item["volume"] }</p>
                                            </div>
                                            <div className="col-1 cart-item-delete-container">
                                                <p className="close-button hover" onClick={() => this.removeItem(item['id'])}>X</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                    
                    {
                        this.state.cart.length < 1 ?
                            <div></div> :
                            <div className="row checkout-section">
                                <div className="col-3 checkout-section-button keep-shopping">
                                   <Link to="/"> <p> shop more </p></Link>
                                </div>
                                <div className="col-3 checkout-section-button checkout">
                                    <p> Pay </p>
                                </div>
                                <div className="col-4 price-total-container">
                                    <p> Total: </p>
                                    <p># {
                                        this.state.cart.map(e => e['price'] *  e['volume']).reduce((a, b) => a + b)
                                    }
                                    </p>
                                </div>
                            </div>
                    }
                </div>
            </Fragment>
        )
    }
}