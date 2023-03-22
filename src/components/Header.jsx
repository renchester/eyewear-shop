import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__main">
        <div className="header__main--extra-message">
          Free shipping on orders above 10000
        </div>

        <Link to="/" className="header__logo">
          <h1 className="header__logo-main">SAVANT</h1>
          <h2 className="header__logo-sub">EYEWEAR</h2>
        </Link>
        <div className="header__icons-wrapper">
          <div className="header__icon icon__search material-symbols-outlined">
            search
          </div>
          <div className="header__icon icon__shopping-bag material-symbols-outlined">
            shopping_bag
          </div>
        </div>
      </div>

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
    </header>
  );
}
export default Header;
