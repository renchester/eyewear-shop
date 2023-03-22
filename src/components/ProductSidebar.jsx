import { NavLink } from 'react-router-dom';

function ProductSidebar() {
  return (
    <nav className="sb-nav">
      <ul className="sb-nav__links">
        <li className="sb-nav__link--wrapper">
          <NavLink to="/products" end className="sb-nav__link">
            All Products
          </NavLink>
        </li>
        <li className="sb-nav__link--wrapper">
          <NavLink to="/products/eyeglasses" className="sb-nav__link">
            Eyeglasses
          </NavLink>
        </li>
        <li className="sb-nav__link--wrapper">
          <NavLink to="/products/sunglasses" className="sb-nav__link">
            Sunglasses
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default ProductSidebar;
