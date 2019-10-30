import React, { Component } from 'react'
import './about.scss'
export default class About extends Component {
  render() {
    return (
      <div className="about container mt-4">
        <div className="row">
          <div className="col-12">
            <h3 className="about-header"> ABOUT </h3>
          </div>
          <div >
            <p className="about-body-1">
              &nbsp; Blue Flame Indoors in one of the leading ecomerce site in nigeria
              specifically meant for curtain, window blinds and it accesories.
              It is designed to help individuals, groups, organisation and office
                owners not just to know the right type of curtain and blind to
                use but also the price and accesories that will be required.
                The BFI is divided into four (4) categories : <br />
              <strong>ABOUT SECTION - </strong> explains the app <br />
              <strong>HOW IT WORKS SECTION - </strong> allows the user to specify areas they want to cover, inturn provide the user with the quantity of materials needed for such specification <br />
              <strong>TESTIMONY SECTION - </strong> Provides insight as to level of customers satisfaction <br />
              <strong>ECOMERCE SECTION - </strong> is where purchase takes place <br />
              &nbsp; As a client driven company, BFI is aimed at promoting excelent client-company relationship through the provision of maximum client satisfaction For more on BFI, you can contact customer care: help@blueflameindoors.com
            </p>
          </div>
          <div className="col-12 about-header-container">
            <h3 className="about-header"> MEET THE TEAM </h3>
          </div>
        </div>
        <div className="row mt-3 about-team-container">
            <div className="col-12 team-card">
              <img src= "https://res.cloudinary.com/xrole/image/upload/v1572434017/BlueFlameIndoors/test2.jpg" />
              <div className="team-info">
                <p className="text">CEO</p>
              </div>
              <p className="mt-1"> <strong>Uzodinma Ezeifedikwa</strong></p>
            </div>
            <div className="col-12 team-card">
              <img src= "https://res.cloudinary.com/xrole/image/upload/v1572433813/BlueFlameIndoors/test1.jpg" />
              <div className="team-info">
                <p className="text">Manager </p>
              </div>
              <p className="mt-1"> <strong>Belinda Benjamin Umoh</strong></p>
            </div>
            <div className="col-12 team-card">
              <img src= "https://res.cloudinary.com/xrole/image/upload/v1572434249/BlueFlameIndoors/test3.jpg" />
              <div className="team-info">
                <p className="text">CTO </p>
              </div>
                <p className="mt-1"> <strong>Xrole Diamond</strong></p>
            </div>
          </div>
      </div>
    )
  }
}
