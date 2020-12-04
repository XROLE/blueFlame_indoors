import React, { Component } from 'react';
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
           <Products history={this.props.history}/>
          </div>
        </div>
      </div>
    );
  }
}

