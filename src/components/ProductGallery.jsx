import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

import {
  allProductsCategoryData,
  sunglassesCategoryData,
  eyeglassesCategoryData,
} from '../data/productCategoryData';
import sortProducts from '../utils/sortProducts';

function ProductGallery({ categoryType }) {
  const [categoryData, setCategoryData] = useState(allProductsCategoryData);
  const { productSort, productsRef, setBannerContent, currentPage, setSearch } =
    useOutletContext();
  const sortedProductsData = sortProducts(categoryData.products, productSort);

  const ITEMS_PER_PAGE = 12;
  const start = (+currentPage - 1) * ITEMS_PER_PAGE;
  const end = +currentPage * ITEMS_PER_PAGE;

  const currentItems = sortedProductsData.slice(start, end);
  const pageCount = Math.ceil(sortedProductsData.length / ITEMS_PER_PAGE);

  useEffect(() => {
    switch (categoryType) {
      case 'allProducts': {
        setCategoryData(allProductsCategoryData);
        break;
      }
      case 'sunglasses': {
        setCategoryData(sunglassesCategoryData);
        break;
      }
      case 'eyeglasses': {
        setCategoryData(eyeglassesCategoryData);
        break;
      }
      default:
        setCategoryData(allProductsCategoryData);
    }
  }, [categoryType]);

  useEffect(() => {
    document.title = `${categoryData.documentTitle} - Page ${currentPage}`;
  }, [categoryData, currentPage]);

  useEffect(() => {
    setBannerContent(() => categoryData.banner);
  }, [categoryData, setBannerContent]);

  useEffect(() => {
    productsRef.current.scrollIntoView();
  }, [productsRef, currentPage]);

  const handlePageClick = (e) => {
    setSearch({ page: +e.selected + 1 });
  };

  return (
    <>
      {currentItems.length > 0 ? (
        <>
          {currentItems.map((item) => (
            <ProductCard
              key={`${item.id}--product-gallery-${categoryType}`}
              content={item}
            />
          ))}
        </>
      ) : (
        <div className="products__no-results">
          Sorry, there are no products matching your search.
        </div>
      )}
      {currentItems.length > 0 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          forcePage={currentPage - 1}
          containerClassName="pgnt__container"
          pageClassName="pgnt__li"
          activeClassName="active"
          pageLinkClassName="pgnt__link"
          activeLinkClassName="active"
          previousClassName="pgnt__btn pgnt__btn--prev"
          previousLinkClassName="pgnt__btn-link"
          nextClassName="pgnt__btn pgnt__btn--next"
          nextLinkClassName="pgnt__btn-link "
          disabledClassName="disabled"
          disabledLinkClassName="disabled"
        />
      )}
    </>
  );
}

ProductGallery.propTypes = {
  categoryType: PropTypes.string.isRequired,
};

export default ProductGallery;
