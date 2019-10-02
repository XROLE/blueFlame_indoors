import React, { Component } from 'react';
import Slides from '../../components/Slides';
import SideBar from '../../components/SideBar';
import './landingPageContainer.scss';

export default class LandingPageContainer extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="landing-page-container">
        <div className="row">
          <div className="col-2 landing-page-container-side-bar">
            <SideBar />
          </div>
          <div className="col-10" >
            <Slides />
          </div>
        </div>
      </div>
    )
  }
}
