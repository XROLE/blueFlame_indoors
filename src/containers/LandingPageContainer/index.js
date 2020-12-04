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
          <div className="landing-page-container-main-content" >
            <Slides />
           <Products history={this.props.history}/>
          </div>
        </div>
      </div>
    );
  }
}

