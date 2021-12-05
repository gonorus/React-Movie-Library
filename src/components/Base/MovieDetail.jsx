import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import Console from '../../helpers/Console';

const MovieDetail = ({ url }) => {
  useEffect(() => {
    Console.Log('mounting', url);
  }, []);

  return (
    <Modal>
      <div className='movie-details'>
        {url}
      </div>
    </Modal>
  );
};
MovieDetail.propTypes = {
  url: PropTypes.string.isRequired
};
export default MovieDetail;
