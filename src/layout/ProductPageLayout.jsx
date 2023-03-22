import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import ProductBanner from '../components/ProductBanner';
import ProductSidebar from '../components/ProductSidebar';

function ProductPageLayout() {
  const [bannerContent, setBannerContent] = useState({
    title: '',
    description: '',
    img: '',
  });

  return (
    <div className="screen-product">
      <ProductBanner content={bannerContent} />
      <div className="products--wrapper">
        <ProductSidebar />
        <main className="products">
          <div className="products-sorter">
            <label htmlFor="product-sort" className="products-sorter__label">
              Sort By:
              <select
                name="productSortOrder"
                id="product-sort"
                className="products-sorter__selection"
                defaultValue="recommended"
              >
                <option value="recommended">Recommended</option>
                <option value="alphabetical-ascending">
                  Alphabetical: A-Z
                </option>
                <option value="alphabetical-descending">
                  Alphabetical: Z-A
                </option>
                <option value="price-ascending">Price: Low to High</option>
                <option value="price-descending">Price: High to Low</option>
              </select>
            </label>
          </div>
          <section className="products-display">
            <Outlet context={[bannerContent, setBannerContent]} />
          </section>
        </main>
      </div>
    </div>
  );
}
export default ProductPageLayout;
