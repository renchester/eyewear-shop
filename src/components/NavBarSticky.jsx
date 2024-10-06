import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import CartContext from '../context/CartContext';
import { BLOB_URL } from '../config';

function NavBarSticky(props) {
  const { toggleSearchView } = props;

  const [menuVisible, setMenuVisibility] = useState(false);
  const [cartItems] = useContext(CartContext);

  const toggleMenuVisibility = () => {
    setMenuVisibility(() => !menuVisible);
  };

  const hideMenu = () => {
    setMenuVisibility(false);
  };

  useEffect(() => {
    const windowHideMenuClick = (e) => {
      if (!e.target.closest('.nav')) hideMenu();
    };

    const windowHideMenuEsc = (e) => {
      if (e.key === 'Escape') hideMenu();
    };

    window.addEventListener('click', windowHideMenuClick);
    window.addEventListener('keydown', windowHideMenuEsc);

    return () => {
      window.removeEventListener('click', windowHideMenuClick);
      window.removeEventListener('keydown', windowHideMenuEsc);
    };
  }, []);

  return (
    <motion.nav
      className="nav nav--sticky"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'tween' }}
    >
      <button
        type="button"
        className="material-symbols-outlined nav__btn-menu"
        onClick={toggleMenuVisibility}
        data-testid="menu-btn"
      >
        menu
      </button>

      <Link to="/" className="nav__logo">
        <img
          src={`${BLOB_URL}/logo-white.png`}
          alt="Savant logo"
          className="nav__logo-img"
        />
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
      <AnimatePresence>
        {menuVisible && (
          <motion.nav
            className="nav-menu"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, originY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ type: 'tween' }}
            data-testid="menu-dropdown"
          >
            <ul className="nav-menu__links">
              <NavLink
                to="/products"
                className="nav-menu__link
            "
              >
                Collection
              </NavLink>
              <NavLink
                to="/products/eyeglasses"
                className="nav-menu__link
            "
              >
                Eyeglasses
              </NavLink>
              <NavLink
                to="/products/sunglasses"
                className="nav-menu__link
            "
              >
                Sunglasses
              </NavLink>

              <NavLink
                to="/about"
                className="nav-menu__link
            "
              >
                About us
              </NavLink>
            </ul>

            <button
              type="button"
              className="material-symbols-outlined nav-menu__btn-collapse"
              onClick={hideMenu}
              data-testid="hide-menu-btn"
            >
              arrow_back_ios_new
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

NavBarSticky.propTypes = {
  toggleSearchView: PropTypes.func.isRequired,
};

export default NavBarSticky;
