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
  window.location.reload();
  return store.dispatch(getCartCount());
};

export const getCartItems = () => {
  try { 
    return Object.values(JSON.parse(localStorage.getItem('cart')));
  } catch (e) {
    return [];
  }
}

export const deleteItem = (id) => {
  let itemIndex = -2;
  const cartItems = Object.values(JSON.parse(localStorage.getItem('cart')));

  for(let i = 0; i < cartItems.length; i++) {
    if(cartItems[i].id == id){
      itemIndex = i;
    }
  }
  cartItems.splice(itemIndex, 1);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  return store.dispatch(getCartCount());;
}

export const incrementItem = (id) => {
  const cartItems = Object.values(JSON.parse(localStorage.getItem('cart')));

  for(let i = 0; i < cartItems.length; i++) {
    if(cartItems[i].id == id){
      cartItems[i].volume++;
    }
  }
  localStorage.setItem('cart', JSON.stringify(cartItems));
  return cartItems;
};

export const decrementItem = (id) => {
  const cartItems = Object.values(JSON.parse(localStorage.getItem('cart')));

  for(let i = 0; i < cartItems.length; i++) {
    if(cartItems[i].id == id && cartItems[i].volume > 1){
      cartItems[i].volume--;
    }
  }
  localStorage.setItem('cart', JSON.stringify(cartItems));
  return cartItems;
}