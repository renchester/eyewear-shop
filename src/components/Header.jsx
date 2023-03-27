import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

import CartContext from '../context/CartContext';
import SearchPanel from './SearchPanel';
import NavBar from './NavBar';
import NavBarSticky from './NavBarSticky';

import ImageWrapper from './ImageWrapper';
import logo from '../assets/img/logo-black.png';

function Header() {
  const [cartItems] = useContext(CartContext);

  const [searchInView, setSearchInView] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  const toggleSearchView = () => {
    setSearchInView(() => !searchInView);
  };

  const hideSearchView = () => {
    setSearchInView(false);
  };

  return (
    <header className="header">
      <div className="header__main" ref={ref}>
        <div className="header__main--extra-message">
          Free shipping on orders above 10000
        </div>

        <Link to="/" className="header__logo">
          <ImageWrapper className="header__logo-img-wrapper">
            <img src={logo} alt="Savant logo" className="header__logo-img" />
          </ImageWrapper>
        </Link>
        <div className="header__icons-wrapper">
          <button
            type="button"
            className="header__btn-icon icon__search material-symbols-outlined"
            onClick={toggleSearchView}
          >
            <svg
              viewBox="-2 -2 34 34"
              version="1.1"
              className="header__search-svg"
            >
              <title>Search</title>
              <g stroke="none" fill="currentColor" fillRule="nonzero">
                <path d="M29.6,27.4 L22.9,20.7 C24.6,18.6 25.6,15.9 25.6,13 C25.6,6.1 20,0.5 13.1,0.5 C6.2,0.5 0.5,6.1 0.5,13 C0.5,19.9 6.1,25.5 13,25.5 C15.9,25.5 18.6,24.5 20.7,22.8 L27.4,29.5 L29.6,27.4 Z M3.5,13 C3.5,7.8 7.8,3.5 13,3.5 C18.2,3.5 22.5,7.8 22.5,13 C22.5,18.2 18.2,22.5 13,22.5 C7.8,22.5 3.5,18.2 3.5,13 Z" />
              </g>
            </svg>
          </button>
          <Link
            to="/cart"
            className="header__btn-icon icon__shopping-bag material-symbols-outlined"
          >
            shopping_bag
            {cartItems.length > 0 && (
              <div className="cart-badge">{cartItems.length}</div>
            )}
          </Link>
        </div>
      </div>

      {inView ? (
        <NavBar />
      ) : (
        <NavBarSticky toggleSearchView={toggleSearchView} />
      )}

      <AnimatePresence>
        {searchInView && (
          <>
            <motion.div
              className="search__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={hideSearchView}
            />
            <SearchPanel toggleSearchView={toggleSearchView} />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
export default Header;
