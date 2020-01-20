import React, {Fragment} from 'react';
import Navbar from '../Navbar';
import Searchar from '../SearchBar';

import './item.scss';

export default class Item extends React.Component {
  render () {
    return (
      <Fragment>
        <Navbar />
        <Searchar />
        <div className="container item-wrapper">
          <div className="row item-row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="image-container">
                <img src="https://5.imimg.com/data5/MF/SG/MY-29403875/roller-blind-curtain-500x500.jpg" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="info-container">
                <h3>Bail Design</h3>
                <div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                </div>
                <div className='table-container'>
                  <table >
                    <tbody>
                      <tr>
                        <td className='bold'>Quantity:</td>
                        <td>50 Yards</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold'>Price:</td>
                        <td># 94,000</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className='bold'>Date Added:</td>
                        <td>20/01/2020</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="button-container">
                  <p className="add-to-cart">Add To Cart</p>
                  <p className='checkout'>Checkout</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row more-products-row">
            <div className="col-3 product-container">
              <img src="https://tshop.r10s.com/af1/f0a/6456/d6e3/80a8/bf1c/4d83/114ae999d00242ac110003.jpg" />
            </div>
            <div className="col-3 product-container">
              <img src="https://thehomeofinteriors.co.uk/wp-content/uploads/SWCONCH.CH-Contemporary-Cylinder-Hook.jpg" />
            </div>
            <div className="col-3 product-container">
              <img src="https://www.qualitypoles.com/ekmps/shops/qualitypoles1/images/speedy-diamond-metal-curtain-tieback-hooks-pair-satin-silver-3591-p.jpg" />
            </div>
            <div className="col-3 product-container">
              <img src="https://www.dhresource.com/600x600/f2/albu/g10/M00/94/11/rBVaVl1knsWAFPM0AAIUgB55Avo312.jpg" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
