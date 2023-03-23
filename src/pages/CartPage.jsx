import { useContext } from 'react';
import { nanoid } from 'nanoid';

import CartContext from '../context/CartContext';

import { allProductsData } from '../data/productData';

function CartPage() {
  const [cart, setCart] = useContext(CartContext);

  console.log(cart);

  return (
    <>
      {cart.map((item) => {
        const productInCart = allProductsData.find(
          (product) => product.id === item.itemId,
        );

        return <div key={nanoid()}>{productInCart.title}</div>;
      })}
    </>
  );
}
export default CartPage;
