import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Picture.scss';

import Spinner from '../Misc/Spinner';

/**
 * Picture Component with Lazy image loading behavior
 */
const Picture = React.forwardRef(({ src, alt }, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className='picture-container'>
      <img
        ref={ref}
        loading='lazy'
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
      { isLoaded === false && <Spinner /> }
    </div>
  );
});
Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
Picture.defaultProps = {
  alt: undefined,
};
export default Picture;
