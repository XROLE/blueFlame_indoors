import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import Hiw from '../../components/Hiw';

export default class HiwContainer extends Component {
  render (){
    return(
    <Fragment>
      <Navbar />
      <SearchBar />
      <Hiw />
    </Fragment>);
  }
}
