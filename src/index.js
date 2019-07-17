import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';

export class LandingPage extends Component {
  constructor (props) {
  super(props)
  }

  render () {
    return (
      <Fragment>
        <Navbar />
      </Fragment>
    )
  }
}

ReactDOM.render(<LandingPage />, document.getElementById('App'));
