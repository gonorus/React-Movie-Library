import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';

export const DisplayModal = (Component) => {
  const rooElement = document.getElementById('root');
  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal-container';

  if (rooElement) {
    rooElement.appendChild(modalContainer);
    ReactDOM.render(Component, modalContainer);
  }
};

const Modal = ({ children }) => {
  useEffect(() => () => {
    const containerElement = document.getElementsByClassName('modal-container')[0];
    containerElement.remove();
  }, []);

  const OnCloseModal = () => {
    const containerElement = document.getElementsByClassName('modal-container')[0];
    if (containerElement) ReactDOM.unmountComponentAtNode(containerElement);
  };

  return (
    <div className='modal-dialog'>
      <button type='button' onClick={OnCloseModal}>Close</button>
      {children}
    </div>
  );
};
Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
export default Modal;
