import parsePrice from './parsePrice';
import formatTitle from './formatTitle';

const sortProducts = (productArray, sortBy) => {
  const originalArray = [...productArray];
  let sortedArray;

  switch (sortBy) {
    case 'alphabetical-ascending': {
      sortedArray = originalArray.sort((a, b) =>
        formatTitle(a.title) < formatTitle(b.title) ? -1 : 1,
      );

      break;
    }
    case 'alphabetical-descending': {
      sortedArray = originalArray.sort((a, b) =>
        formatTitle(a.title) > formatTitle(b.title) ? -1 : 1,
      );

      break;
    }
    case 'price-ascending': {
      sortedArray = originalArray.sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price),
      );

      break;
    }
    case 'price-descending': {
      sortedArray = originalArray.sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price),
      );

      break;
    }

    default:
      return originalArray;
  }

  return sortedArray;
};

export default sortProducts;
