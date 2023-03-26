import PropTypes from 'prop-types';
import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

import ImageWrapper from './ImageWrapper';

import CartContext from '../context/CartContext';
import logo from '../assets/img/logo-white.png';

function NavBarSticky(props) {
  const { toggleSearchView } = props;

  const [cartItems] = useContext(CartContext);

  return (
    <nav className="nav nav--sticky">
      <Link to="/" className="nav__logo">
        <ImageWrapper>
          <img src={logo} alt="Savant logo" className="nav__logo-img" />
        </ImageWrapper>
      </Link>
      <ul className="nav__links">
        <NavLink
          to="/products"
          className="nav__link
          "
        >
          Collection
        </NavLink>
        <NavLink
          to="/products/eyeglasses"
          className="nav__link
          "
        >
          Eyeglasses
        </NavLink>
        <NavLink
          to="/products/sunglasses"
          className="nav__link
          "
        >
          Sunglasses
        </NavLink>

        <NavLink
          to="/about"
          className="nav__link
          "
        >
          About us
        </NavLink>
      </ul>
      <div className="nav__icons-wrapper">
        <button
          type="button"
          className="nav__btn-icon icon__search material-symbols-outlined"
          onClick={toggleSearchView}
        >
          <svg viewBox="-2 -2 34 34" version="1.1" className="nav__search-svg">
            <title>Search</title>
            <g stroke="none" fill="currentColor" fillRule="nonzero">
              <path d="M29.6,27.4 L22.9,20.7 C24.6,18.6 25.6,15.9 25.6,13 C25.6,6.1 20,0.5 13.1,0.5 C6.2,0.5 0.5,6.1 0.5,13 C0.5,19.9 6.1,25.5 13,25.5 C15.9,25.5 18.6,24.5 20.7,22.8 L27.4,29.5 L29.6,27.4 Z M3.5,13 C3.5,7.8 7.8,3.5 13,3.5 C18.2,3.5 22.5,7.8 22.5,13 C22.5,18.2 18.2,22.5 13,22.5 C7.8,22.5 3.5,18.2 3.5,13 Z" />
            </g>
          </svg>
        </button>
        <Link
          to="/cart"
          className="nav__btn-icon icon__shopping-bag material-symbols-outlined"
        >
          shopping_bag
          {cartItems.length > 0 && (
            <div className="cart-badge">{cartItems.length}</div>
          )}
        </Link>
      </div>
    </nav>
  );
}

NavBarSticky.propTypes = {
  toggleSearchView: PropTypes.func.isRequired,
};

export default NavBarSticky;
