import React, { Component } from 'react';
import Slides from '../../components/Slides';
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
            <div>
              <h6>CURTAIN CATEGORY</h6>
              <p>Bail Design</p>
              <p>Rich Curtain</p>
              <p>Gold Cost</p>
              <p>Rear Wax</p>
              <p>Sailing Boat</p>
              <p>More....</p>
            </div>
            <div>
              <h6>CURTAIN CATEGORY</h6>
              <p>Bail Design</p>
              <p>Rich Curtain</p>
              <p>Gold Cost</p>
              <p>Rear Wax</p>
              <p>Sailing Boat</p>
              <p>More....</p>
            </div>
            <div>
              <h6>CURTAIN CATEGORY</h6>
              <p>Bail Design</p>
              <p>Rich Curtain</p>
              <p>Gold Cost</p>
              <p>Rear Wax</p>
              <p>Sailing Boat</p>
              <p>More....</p>
            </div>
          </div>
          <div className="col-10" >
            <Slides />
          </div>
        </div>
      </div>
    )
  }
}
