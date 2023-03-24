import { useEffect, useState } from 'react';
import { useSearchParams, useOutletContext } from 'react-router-dom';
import { nanoid } from 'nanoid';

import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import ProductCard from '../components/ProductCard';

import {
  allProductsCategoryData,
  sunglassesCategoryData,
  eyeglassesCategoryData,
} from '../data/productCategoryData';
import sortProducts from '../utils/sortProducts';

function ProductGalleryPage({ categoryType }) {
  const [categoryData, setCategoryData] = useState(allProductsCategoryData);
  const { productSort, setBannerContent } = useOutletContext();
  const sortedProductsData = sortProducts(categoryData.products, productSort);

  const [search, setSearch] = useSearchParams();
  const currentPage = search.get('page') || 1;

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

  const handlePageClick = (e) => {
    setSearch({ page: +e.selected + 1 });
  };

  return (
    <>
      {currentItems.length > 0 ? (
        <>
          {currentItems.map((item) => (
            <ProductCard content={item} key={nanoid()} />
          ))}
        </>
      ) : (
        <div>No items</div>
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
          initialPage={currentPage - 1}
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

ProductGalleryPage.propTypes = {
  categoryType: PropTypes.string.isRequired,
};

export default ProductGalleryPage;
