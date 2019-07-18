import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';

export class LandingPage extends Component {
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

ReactDOM.render(<LandingPage />, document.getElementById('App'));
