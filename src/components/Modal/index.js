import React, { Component, Fragment } from 'react';
import './modal.scss';

const Modal = (props) => {
  const { modalContent } = props;
  return (
    <Fragment>
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {
                (modalContent)
                ? modalContent
                :<p id="exampleModalLongTitle">Please add modal content</p>
              }
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" >&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Modal;
