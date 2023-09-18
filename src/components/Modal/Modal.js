import React from 'react';
import './modal.css';

const SuccessModal = (props) => {
  return (
    <div className='modal'>
      <div className='box'>
        <div className='modalContianer'>
          <div>
            <p className='mensajeModal'>{props.texto}</p>
          </div>
          <div className='closeContainer'>
            <p
              className='closeX'
              onClick={props.closeModal}
            >
              Cerrar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
