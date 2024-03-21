import React from 'react';
import ReactDOM from 'react-dom';
// Portal 
// to render outside of their parent component
// use Portal to mount our Modal component to the end of the document(body)
// two arguments to the createPortal function : componnet we want to render and where we want to append the componnet
const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <h3 style={
            {
              textAlign :'center',
              fontSize : '30px',
              fontFamily: '"Times New Roman", Times, serif',
              'padding':'20px'
            }
        }>Only a maximum of 7 of purposes per day </h3>
        <p style={
            {
                'margin' : '10px',
                textAlign:'center',
                fontSize:'20px'
              }
        }> 
         Hey , you have to do one of them completed to add more
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;
