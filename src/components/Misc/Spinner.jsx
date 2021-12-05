import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.scss';

/**
 * Spinner display animation
 * @returns
 */
const Spinner = ({ size }) => {
  const style = {
    width: size,
  };
  return (
    <div className='showbox'>
      <div className='loader' style={style}>
        <svg className='circular' viewBox='25 25 50 50'>
          <circle className='path' cx='50' cy='50' r='20' fill='none' strokeWidth='2' strokeMiterlimit='10' />
        </svg>
      </div>
    </div>
  );
};
Spinner.propTypes = {
  size: PropTypes.number,
};
Spinner.defaultProps = {
  size: 50,
};
export default Spinner;
