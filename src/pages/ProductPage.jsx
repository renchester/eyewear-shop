import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { allProductsData } from '../data/productData';

function ProductPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState({
    id: '',
    brand: '',
    title: '',
    price: '',
    originalPrice: '',
    description: '',
    technicalDetails: [],
    type: '',
    color: '',
    quantity: '',
    onSale: '',
    images: {
      main: '',
      side: '',
    },
  });
  const [activeImg, setActiveImg] = useState(1);
  const [desiredQty, setDesiredQty] = useState(1);

  useEffect(() => {
    setProduct(() => allProductsData.find((p) => p.id === productId));
  }, [productId]);

  const handleDesiredQty = (e) => {
    setDesiredQty(() => e.target.value);
  };

  return (
    <main className="pd-pg">
      <section className="pd-pg__img--container">
        <nav className="pd-pg__nav">
          <Link to="/" className="pd-pg__nav-link">
            HOME
          </Link>{' '}
          /
          {product.type === 'sunnies' ? (
            <Link to="/products/sunglasses" className="pd-pg__nav-link">
              Sunglasses
            </Link>
          ) : (
            <Link to="/products/eyeglasses" className="pd-pg__nav-link">
              Eyeglasses
            </Link>
          )}{' '}
          /<span className="pd-pg__nav-link">{product.brand}</span>
        </nav>
        <div className="pd-pg__img--wrapper">
          {activeImg === 1 ? (
            <img
              src={product.images.main}
              alt={`${product.title} front view`}
              className="pd-pg__active-img"
            />
          ) : (
            <img
              src={product.images.side}
              alt={`${product.title} side view`}
              className="pd-pg__active-img"
            />
          )}
          <div className="pd-pg__img-thumbs">
            <button
              className={`pd-pg__img-thumbnail--wrapper ${
                activeImg === 1 ? 'active' : ''
              }`}
              type="button"
              onClick={() => setActiveImg(1)}
            >
              <img
                src={product.images.main}
                alt={`${product.title} front view`}
                className="pd-pg__img-thumbnail"
              />
            </button>
            <button
              className={`pd-pg__img-thumbnail--wrapper ${
                activeImg === 2 ? 'active' : ''
              }`}
              type="button"
              onClick={() => setActiveImg(2)}
            >
              <img
                src={product.images.side}
                alt={`${product.title} side view`}
                className="pd-pg__img-thumbnail"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="pd-pg__details--container">
        <h1 className="pd-pg__title">{product.title}</h1>
        <div className="pd-pg__price--wrapper">
          <h3 className="pd-pg__price">{product.price}</h3>
          {product.onSale && (
            <h3 className="pd-pg__og-price">{product.originalPrice}</h3>
          )}
        </div>
        <div className="pd-pg__details">
          <p className="pd-pg__description">{product.description}</p>
          <ul className="pd-pg__tech-details">
            {product.technicalDetails.map((td) => (
              <li className="pd-pg__tech-detail" key={td}>
                {td}
              </li>
            ))}
          </ul>
        </div>
        <div className="pd-pg__opt-details">
          {product.color && (
            <div className="pd-pg__color--wrapper">
              <span className=" pd-pg__opt-label pd-pg__color-label">
                Color:{' '}
              </span>
              <span className="pd-pg__color">{product.color}</span>
            </div>
          )}
          {product.quantity > 0 ? (
            <>
              <label
                htmlFor="pd-quantity"
                className=" pd-pg__opt-label pd-pg__quantity-label"
              >
                Quantity:
                <input
                  type="number"
                  className="pd-pg__quantity-input"
                  name="pd-quantity"
                  id="pd-quantity"
                  max={product.quantity}
                  min={1}
                  onChange={handleDesiredQty}
                  value={desiredQty}
                />
              </label>
              <button className="pd-pg__btn-add-cart" type="button">
                Add to Cart
              </button>
            </>
          ) : (
            <div className="pd-pg__quantity-sold-out">
              Item is currently sold out. Keep posted for updates!
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
export default ProductPage;
