import React, { Component, Fragment } from 'react'
import Navbar from '../../components/Navbar';
import About from '../../components/About';

export default class AboutContainer extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <About />
      </Fragment>
    )
  }
}
