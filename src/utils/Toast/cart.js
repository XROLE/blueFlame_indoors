import store from '../../store';
import { getCartCount } from '../../actions';
import { toastMessage } from './showMessage';

let cart = [];
const cartItemIdArray = [];


export const addToCart = (item) => {
  if(JSON.parse(localStorage.getItem('cart') == null)) {
      cart = [];
  }else {
    cart = Object.values(JSON.parse(localStorage.getItem('cart')));
    cart.map(cartItem => cartItemIdArray.push(cartItem.id));
  }

  if(cartItemIdArray.includes(item.id)){
    return toastMessage(`${item.name} Already Exist`, null, 2000);
  } else {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    const message = `Added ${item.name} `;
    toastMessage(message, 'success', 2000);
    return store.dispatch(getCartCount());
  }
};

export const clearCart = () => {
  localStorage.removeItem('cart');
  toastMessage('Checkout not working yet', 'success', 2000);
  window.location.reload();
  return store.dispatch(getCartCount());
};
