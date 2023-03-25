import PropTypes from 'prop-types';

function ImageWrapper(props) {
  const { children, className } = props;

  return <div className={`img-wrapper ${className}`}>{children}</div>;
}

ImageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ImageWrapper.defaultProps = {
  className: '',
};

export default ImageWrapper;
