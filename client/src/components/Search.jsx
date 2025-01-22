import { useState, useEffect } from 'react';
import { fetchSearchFilter } from '../utils/api'; // Ensure you create an API utility to fetch this

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch the search filter data (categories, tags, etc.)
    const fetchFilters = async () => {
      const filterData = await fetchSearchFilter();
      setFilters(filterData);
    };
    fetchFilters();
  }, []);

  const handleSearch = async () => {
    if (searchQuery) {
      // Fetch the search results from your Strapi API based on the search query
      const results = await fetch(`/api/products?search=${searchQuery}`);
      const data = await results.json();
      setSearchResults(data);
    }
  };

  return (
    <div className="search-container">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search for products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-btn">Search</button>

      {/* Search Filters */}
      <div className="filters">
        {filters.map((filter) => (
          <div key={filter.id} className="filter">
            <label>{filter.name}</label>
            <select>
              {/* Render options for filtering */}
              {filter.options.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Search Results */}
      <div className="search-results">
        {searchResults.map((result) => (
          <div key={result.id} className="search-result-item">
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
