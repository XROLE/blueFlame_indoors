import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './slide.scss';

export default class Slides extends Component {
  render () {
    return (
      <Fragment>
        <div className="bd-example container">
          <Link to='/item' id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://res.cloudinary.com/xrole/image/upload/v1569688707/BlueFlameIndoors/Screenshot_2019-09-28_at_5.37.17_PM.png" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://res.cloudinary.com/xrole/image/upload/v1569688033/BlueFlameIndoors/C2.png" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://res.cloudinary.com/xrole/image/upload/v1569688027/BlueFlameIndoors/C1.png" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </Link>
        </div>
      </Fragment>
    )
  }
}
