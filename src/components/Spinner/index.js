import React, { Component } from 'react';
import { css } from '@emotion/core';
import ScaleLoader from 'react-spinners/ScaleLoader';


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
export default class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

    render() {
      return (
        <div className='sweet-loading'>
          <ScaleLoader
            css={override}
            sizeUnit={"px"}
            size={250}
            color={'#f05e23'}
            loading={this.state.loading}
          />
        </div>
      )
    }
}
