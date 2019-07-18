import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';



export class App extends Component {
  constructor (props) {
  super(props)
  }

  render () {
    return (
      <Fragment>
        <Navbar />
        <SearchBar />
        <Modal />
      </Fragment>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('App')
  );
