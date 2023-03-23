import { allProductsData } from '../data/productData';
import parsePrice from './parsePrice';

const getTotalPrice = (cartArray) =>
  cartArray.reduce((prev, curr) => {
    const target = allProductsData.find(
      (product) => product.id === curr.itemId,
    );

    const price = parsePrice(target.price) * curr.quantity;

    return +prev + +price;
  }, 0);

export default getTotalPrice;
