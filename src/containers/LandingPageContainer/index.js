import React, { Component } from 'react';
import Slides from '../../components/Slides';
import SideBar from '../../components/SideBar';
import Products from '../../components/Products';
import './landingPageContainer.scss';

export default class LandingPageContainer extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-page-container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-2  landing-page-container-side-bar">
            <SideBar />
          </div>
          <div className="col-12 col-md-12 col-lg-10 landing-page-container-main-content" >
            <Slides />
           <Products history={this.props.history}/>
          </div>
        </div>
      </div>
    );
  }
}

