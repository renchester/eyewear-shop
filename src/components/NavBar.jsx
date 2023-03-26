import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav">
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
    </nav>
  );
}

export default NavBar;
