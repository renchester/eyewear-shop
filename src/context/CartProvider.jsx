import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import CartContext from './CartContext';

function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('esCart')) || [],
  );
  const value = useMemo(() => [cart, setCart], [cart]);

  useEffect(() => {
    localStorage.setItem('esCart', JSON.stringify(cart));
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node,
};

CartProvider.defaultProps = {
  children: <div>CartProvider</div>,
};

export default CartProvider;
