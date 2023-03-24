import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { nanoid } from 'nanoid';

import { allProductsData } from '../data/productData';
import searchForMatch from '../utils/searchForMatch';

function SearchPanel(props) {
  const { toggleSearchView } = props;

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchForProduct = (e) => {
    setQuery(() => e.target.value);
  };

  useEffect(() => {
    setSearchResults(() => searchForMatch(query, allProductsData));
  }, [query]);

  return (
    <div className="search">
      <button
        type="button"
        className="search__btn-close material-symbols-outlined"
        onClick={toggleSearchView}
      >
        arrow_back_ios
      </button>
      <h2 className="search__title">Search Our Collection</h2>
      <form
        action=""
        className="search-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <DebounceInput
          className="search-input"
          type="search"
          name="searchQuery"
          id="search-input"
          value={query}
          debounceTimeout={600}
          onChange={searchForProduct}
          spellCheck={false}
        />

        <button type="submit" className="search__btn-submit">
          GO
        </button>
      </form>
      <div className="search-results">
        {query &&
          searchResults.length > 0 &&
          searchResults.map((res) => (
            <Link
              to={`products/${
                res.type === 'sunnies' ? 'sunglasses' : 'eyeglasses'
              }/${res.id}`}
              className="search-result"
              key={nanoid()}
              onClick={toggleSearchView}
            >
              <img
                src={res.images.main}
                alt={`${res.title} front view`}
                width={50}
                className="search-result__img"
              />
              <div className="search-result__details">
                <span className="search-result__title">{res.title}</span>
                <span className="search-result__price">{res.price}</span>
              </div>
            </Link>
          ))}

        {query && searchResults.length === 0 && (
          <div
            className="search__no-results
        "
          >
            No search results
          </div>
        )}
      </div>
    </div>
  );
}

SearchPanel.propTypes = {
  toggleSearchView: PropTypes.func.isRequired,
};
export default SearchPanel;

/*
 {
   searchResults.length > 0 ? (
     searchResults.map((res) => (
       <div className="search-result" key={nanoid()}>
         <img
           src={res.images.main}
           alt={`${res.title} front view`}
           width={50}
         />
         <div className="search-result__details">
           <span className="search-result__title">{res.title}</span>
           <span className="search-result__price">{res.price}</span>
         </div>
       </div>
     ))
   ) : (
     <div>No search results</div>
   );
 }

 */

/*

 {query &&
          searchResults.length > 0 &&
          searchResults.map((res) => (
            <div className="search-result" key={nanoid()}>
              <img
                src={res.images.main}
                alt={`${res.title} front view`}
                width={50}
              />
              <div className="search-result__details">
                <span className="search-result__title">{res.title}</span>
                <span className="search-result__price">{res.price}</span>
              </div>
            </div>
          ))}


          */
