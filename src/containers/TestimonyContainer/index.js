import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar';
import Testimony from '../../components/Testimony';

export default class TestimonyContainer extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Testimony />
      </Fragment>
    )
  }
}
