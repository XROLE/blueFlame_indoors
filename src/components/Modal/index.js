import React, { Component, Fragment } from 'react';
import './modal.scss';

const Modal = (props) => {
  const { modalContent } = props;
  return (
    <Fragment>
      <div >
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document" id="modal-dialog">
            <div className="modal-content">
                {
                  (modalContent)
                  ? modalContent
                  :<p id="exampleModalLongTitle">Please add modal content</p>
                }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Modal;
