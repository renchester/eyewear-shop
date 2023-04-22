import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import formatPrice from '../utils/formatPrice';
import parsePrice from '../utils/parsePrice';
import CartContext from '../context/CartContext';

function CartRow(props) {
  const { product } = props;

  const [cart, setCart] = useContext(CartContext);

  const currentProductInCart = cart.find((item) => item.itemId === product.id);
  const desiredQuantity = currentProductInCart.quantity;
  const totalPrice = desiredQuantity * parsePrice(product.price);

  const incrementQuantity = () => {
    if (desiredQuantity >= product.quantity) return;

    setCart(() =>
      cart.map((cartItem) =>
        cartItem.itemId === product.id
          ? {
              ...cartItem,
              quantity: +cartItem.quantity + 1,
            }
          : cartItem,
      ),
    );
  };

  const decrementQuantity = () => {
    if (desiredQuantity <= 1) return;

    setCart(() =>
      cart.map((cartItem) =>
        cartItem.itemId === product.id
          ? {
              ...cartItem,
              quantity: +cartItem.quantity - 1,
            }
          : cartItem,
      ),
    );
  };

  const handleDesiredQty = (e) => {
    setCart(() =>
      cart.map((cartItem) =>
        cartItem.itemId === product.id
          ? {
              ...cartItem,
              quantity: +e.target.value,
            }
          : cartItem,
      ),
    );
  };

  const deleteCartItem = () => {
    setCart(() => cart.filter((cartItem) => cartItem.itemId !== product.id));
  };

  return (
    <tr key={`${product.id}--cart-row`} className="cart-item__row">
      <td className="cart-item__cell item-main">
        <div className="cart-item__main">
          <Link
            to={`/products/${
              product.type === 'sunnies' ? 'sunglasses' : 'eyeglasses'
            }/${product.id}`}
          >
            <img
              src={product.images.main}
              alt={`${product.title} front view`}
              className="item-img"
            />
          </Link>
          <div className="item-title">{product.title}</div>
        </div>
      </td>
      <td className="cart-item__cell item-price">{product.price}</td>
      <td className="cart-item__cell item-quantity">
        <div className="cart-item__quantity--wrapper">
          <button
            type="button"
            className="cart-item__quantity-btn decrement"
            onClick={decrementQuantity}
          >
            -
          </button>
          <input
            type="number"
            name="item-qty"
            id="item-qty"
            className="cart-item__quantity-input"
            min={1}
            max={product.quantity}
            value={desiredQuantity}
            onChange={handleDesiredQty}
            required
          />

          <button
            type="button"
            className="cart-item__quantity-btn increment"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
      </td>
      <td className="cart-item__cell item-total">{formatPrice(totalPrice)}</td>
      <td className="cart-item__cell item-delete">
        <button
          type="button"
          className="cart-item__btn-delete "
          onClick={deleteCartItem}
        >
          Remove{' '}
        </button>
      </td>
    </tr>
  );
}

CartRow.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    originalPrice: PropTypes.string,
    description: PropTypes.string,
    technicalDetails: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    quantity: PropTypes.number.isRequired,
    onSale: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    images: PropTypes.shape({
      main: PropTypes.node,
      side: PropTypes.node,
    }),
  }),
};

CartRow.defaultProps = {
  product: {
    title: 'Product X',
    price: '1000000',
    originalPrice: '1000000',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos inventore, error incidunt nemo, explicabo ',
    technicalDetails: ['Detail 1', 'Detail 2', 'Detail 3'],
    type: 'Type 1',
    color: 'Color 1',
    quantity: 0,
    onSale: false,
    id: 'abcde123',
    images: {
      main: null,
      side: null,
    },
  },
};

export default CartRow;
