import { Link } from 'react-router-dom';

import dogPicture from '../assets/img/unsplash/frame-11.jpg';

function UnderConstruction() {
  return (
    <div className="tbd">
      <span className="tbd__404">404 - ERROR</span>
      <h1 className="tbd__title">OOPS!</h1>
      <img
        src={dogPicture}
        alt="A golden retriever wearing glasses"
        className="tbd__img"
      />
      <h3 className="tbd__subtitle">This is awkward...</h3>
      <p className="tbd__text">
        This page either doesn&apos;t exist or is under construction. Sorry
        about that, here&apos;s a picture of a dog with glasses instead.
      </p>
      <p className="tbd__text">Try the links below!</p>
      <div className="tbd__btn-container">
        <Link
          to="/"
          className="tbd__btn
        "
        >
          HOME
        </Link>
        <Link
          to="/products"
          className="tbd__btn
        "
        >
          SHOP ALL
        </Link>
        <Link
          to="/products/eyeglasses"
          className="tbd__btn
        "
        >
          SHOP OPTICAL
        </Link>
        <Link
          to="/products/sunglasses"
          className="tbd__btn
        "
        >
          SHOP SUNNIES
        </Link>
      </div>
    </div>
  );
}
export default UnderConstruction;
