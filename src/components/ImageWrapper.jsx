import PropTypes from 'prop-types';

function ImageWrapper(props) {
  const { children } = props;

  return <div className="img-wrapper">{children}</div>;
}

ImageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ImageWrapper;
