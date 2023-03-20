import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/about">About</Link>
      </ul>
    </div>
  );
}
export default Header;
