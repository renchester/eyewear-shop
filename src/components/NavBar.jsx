import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function NavBar() {
  return (
    <motion.nav
      className="nav"
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      transition={{ type: 'tween' }}
    >
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
    </motion.nav>
  );
}

export default NavBar;
